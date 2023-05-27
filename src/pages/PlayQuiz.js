import React from "react";
import { NavbarPlay } from "../component/NavbarPlay";
import { QuizAnswerButton } from "../component/QuizAnswerButton";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../component/LoadingScreen";
import axios from "axios";

const TriviaAPIurl = "https://opentdb.com/api.php?amount=14&type=multiple";
const GIFAPIurl =
	"https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=art";

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
	const [timer, setTimer] = useState(20);
	const [score, setScore] = useState(0);
	const [GIF, setGIF] = useState("");
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

	useEffect(() => {
		getAllGIF();
	}, []);

	const getAllGIF = () => {
		axios
			.get(GIFAPIurl)
			.then((response) => {
				const randomGIFIndex = Math.floor(Math.random() * 25);
				const GIF = response.data.data[randomGIFIndex].images.original.url;
				console.log(GIF);
				setGIF(GIF);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	useEffect(() => {
		if (timer === 0) {
			// Timer reached zero, move to next question or perform necessary action
			setScore(score - 50);
			setQuestionIndex(questionIndex + 1);
			setTimer(MAXTIMER); // Reset the timer for the next question
		}

		const timerInterval = setInterval(() => {
			setTimer((prevTimer) => prevTimer - 1); // Decrease the timer value by 1
		}, 1000);

		return () => {
			clearInterval(timerInterval); // Clean up the interval when component unmounts or timer resets
		};
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
			console.log("correct");
		} else {
			setScore((prevScore) => prevScore - 50);
			console.log("false");
		}
	}

	return (
		<div className="">
			<NavbarPlay />
			<div className="bg-gradient-to-b w-full h-screen from-[#CAF0F8] to-[#48CAE4]">
				<div className="bgPage w-full h-screen z-0"></div>
				<div className="container mx-auto">
					{questionIndex < MAXQUESTION ? (
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
						<div> HELLO </div>
					)}
				</div>
			</div>
		</div>
	);
}
