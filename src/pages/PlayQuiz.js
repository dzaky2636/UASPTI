import React from "react";
import { NavbarPlay } from "../component/NavbarPlay";
import { QuizAnswerButton } from "../component/QuizAnswerButton";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../component/LoadingScreen";
import axios from "axios";

import { Button } from "@material-tailwind/react";
import playButton from "../assets/play-button.png";

const TriviaAPIurl = "https://opentdb.com/api.php?amount=14&type=multiple";
const GIFAPIurl =
	"https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=art";
const HelloGIFAPIurl =
	"https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=hello";
const UserAvatarGIFAPIurl =
	"https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&q=cat&limit=25&offset=0&rating=g&lang=en";

const shuffleArray = (array) => {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export function PlayQuiz() {
	const MAXQUESTION = 10;
	const MAXTIMER = 15;

	const [quizStarted, setQuizStarted] = useState(false);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [questions, getQuiz] = useState([]);
	const [timer, setTimer] = useState(15);
	const [score, setScore] = useState(0);
	const [GIF, setGIF] = useState("");
	const [HelloGIF, setHelloGIF] = useState("");
	const [AvatarGIF, setAvatarGIF] = useState("");
	const [newAvatar, setNewAvatar] = useState("");
	const [shuffledChoices, setShuffledChoices] = useState([]);

	useEffect(() => {
		getAllQuiz();
	}, []);

	const getAllQuiz = () => {
		axios
			.get(TriviaAPIurl)
			.then((response) => {
				const questions = response.data.results;
				getQuiz(questions);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	// GIF sebelum kuis
	useEffect(() => {
		getHelloGIF();
	}, []);

	const getHelloGIF = () => {
		axios
			.get(HelloGIFAPIurl)
			.then((response) => {
				const randomGIFIndex = Math.floor(Math.random() * 25);
				const HelloGIF = response.data.data[randomGIFIndex].images.original.url;
				setHelloGIF(HelloGIF);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	// GIF saat kuis
	useEffect(() => {
		getAllGIF();
	}, []);

	const getAllGIF = () => {
		axios
			.get(GIFAPIurl)
			.then((response) => {
				const randomGIFIndex = Math.floor(Math.random() * 25);
				const GIF = response.data.data[randomGIFIndex].images.original.url;
				setGIF(GIF);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	// GIF untuk avatar user
	useEffect(() => {
		getAllAvatar();
	}, [newAvatar]);

	const getAllAvatar = () => {
		axios
			.get(UserAvatarGIFAPIurl)
			.then((response) => {
				const randomGIFIndex = Math.floor(Math.random() * 25);
				const GIF = response.data.data[randomGIFIndex].images.original.url;
				setAvatarGIF(GIF);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	// Timer
	useEffect(() => {
		if (timer === 0) {
			// Timer reached zero, move to next question or perform necessary action
			setScore(score - 50);
			setQuestionIndex(questionIndex + 1);
			setTimer(MAXTIMER); // Reset the timer for the next question
		}

		if (quizStarted && questionIndex < MAXQUESTION) {
			const timerInterval = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1); // Decrease the timer value by 1
			}, 1000);

			return () => {
				clearInterval(timerInterval); // Clean up the interval when component unmounts or timer resets
			};
		}
	}, [timer, questionIndex]);

	useEffect(() => {
		if (questions.length > 0) {
			const choices = questions[questionIndex].incorrect_answers.concat(
				questions[questionIndex].correct_answer
			);
			const shuffled = shuffleArray(choices);
			setShuffledChoices(shuffled);
		}
	}, [questionIndex, questions]);

	if (questions == "") {
		return <LoadingScreen />;
	}

	function startQuiz() {
		setQuizStarted(true);
	}

	var choices = questions[questionIndex].incorrect_answers.concat(
		questions[questionIndex].correct_answer
	);

	let percentageTimer = (timer / MAXTIMER) * 100;
	var correctAnswer = questions[questionIndex].correct_answer;
	console.log(correctAnswer);

	function checkAnswer(choiceIndex) {
		setQuestionIndex((prevIndex) => {
			setTimer(MAXTIMER);
			return prevIndex + 1;
		});
		if (shuffledChoices[choiceIndex] === correctAnswer) {
			setScore((prevScore) => prevScore + 100);
		} else {
			setScore((prevScore) => prevScore - 50);
		}
	}

	const newLeaderboard = {
		name: "",
		score: "",
		avatar: "",
	};

	function updateLeaderboard() {}

	return (
		<div className="">
			<NavbarPlay />
			<div className="bg-gradient-to-b w-full h-screen from-[#CAF0F8] to-[#48CAE4]">
				<div className="bgPage w-full h-screen z-0"></div>
				<div className="container mx-auto">
					{/* Before Play */}
					{!quizStarted ? (
						<div className="relative flex flex-col h-screen justify-center gap-4 scale-100 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
							<div className="flex justify-center">
								<div className="flex flex-col gap-5 justify-center">
									<div className="flex justify-center mx-10">
										<img
											className="rounded-2xl w-[350px] border-2 border-white"
											src={`${HelloGIF}`}
											alt="GIF"
										/>
									</div>
									<div className="flex flex-col gap-4 justify-center mx-10">
										<div className="flex justify-center">
											<Button
												onClick={startQuiz}
												className="font-semibold text-3xl text-white hover:text-black hover:bg-[#fedf52] flex items-center gap-2 bg-[#5381e5]">
												START
												<img
													src={playButton}
													alt="Play Button"
													className="h-4 w-4 mb-1"
												/>
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : // During Play
					questionIndex < MAXQUESTION ? (
						<div className="relative flex flex-col h-screen justify-center gap-4 scale-75 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
							<div className="flex justify-center mt-20">
								<div className="bg-white rounded-full p-2 px-7 lg:px-12">
									<div className="text-md lg:text-xl">Score: {score}</div>
								</div>
							</div>
							<div className="flex justify-center mx-10">
								<img
									className="rounded-2xl w-[350px] border-2 border-white"
									src={`${GIF}`}
									alt="GIF"
								/>
							</div>
							<div className="flex justify-center">
								<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-10">
									<div
										className="bg-green-600 h-2.5 rounded-full dark:bg-blue-500 transition ease-in-out"
										style={{ width: percentageTimer + "%" }}></div>
								</div>
							</div>
							<h1
								dangerouslySetInnerHTML={{
									__html: questions[questionIndex].question,
								}}
								className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mx-10"></h1>
							<div className="flex flex-wrap gap-4 justify-center mx-10 scale-90 lg:scale-100">
								{shuffledChoices.map((choice, index) => (
									<QuizAnswerButton
										onClick={() => checkAnswer(index)}
										answer={choice}
										datanumber={index}
									/>
								))}
							</div>
						</div>
					) : (
						//After Play
						<div className="relative flex h-screen justify-center gap-4 scale-100 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
							<div className="flex flex-col gap-5 justify-center">
								<div className="flex justify-center mx-10">
									<img
										className="rounded-2xl w-[350px] border-2 border-white"
										src={`${AvatarGIF}`}
										alt="GIF"
									/>
								</div>
								<div className="flex flex-col gap-4 justify-center mx-10">
									<div className="flex justify-center">
										<div className="bg-white rounded-full p-2 px-7 lg:px-12">
											<div className="text-md lg:text-xl">
												Score akhir anda: {score}
											</div>
										</div>
									</div>
									<input
										class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="username"
										type="text"
										placeholder="Username"></input>
									<div className="flex justify-center">
										<Button
											onClick={updateLeaderboard}
											className="font-semibold text-sm text-white hover:text-black hover:bg-[#fedf52] flex items-center gap-2 bg-[#5381e5]">
											SUBMIT
											<img
												src={playButton}
												alt="Play Button"
												className="h-4 w-4 mb-1"
											/>
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
