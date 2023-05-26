import React from "react";
import { NavbarPlay } from "../component/NavbarPlay";
import { QuizAnswerButton } from "../component/QuizAnswerButton";
import { useState, useEffect } from "react";
import { LoadingScreen } from "../component/LoadingScreen";
import axios from "axios";

const TriviaAPIurl = "https://opentdb.com/api.php?amount=10&type=multiple";

export function PlayQuiz() {
	let choices = Array.from(document.getElementsByClassName("choice-text"));

	let currentQuestion = {};
	let acceptingAnswers = true;
	let score = 0;
	let questionCounter = 0;
	let availableQuestions = [];

	const CORRECT_BONUS = 10;
	const WRONG_PENALTY = 5;

	const [questions, getQuiz] = useState([]);

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

	if (questions == "") {
		return <LoadingScreen />;
	}

	return (
		<div className="">
			<NavbarPlay />
			<div className="bg-gradient-to-b w-full h-screen from-[#CAF0F8] to-[#48CAE4]">
				<div className="bgPage w-full h-screen z-0"></div>
				<div className="container mx-auto">
					<div className="relative flex flex-col h-screen justify-center gap-4 scale-75 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
						<div className="flex justify-center mt-20">
							<div className="bg-white rounded-full p-2 px-7 lg:px-12">
								<div className="text-md lg:text-xl">Score: {}</div>
							</div>
						</div>
						<div className="flex justify-center mx-10">
							<img
								className="rounded-2xl w-[350px] border-2 border-white"
								src="https://www.w3schools.com/html/pic_trulli.jpg"
								alt=""
							/>
						</div>
						<div className="flex justify-center">
							<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-10">
								<div
									className="bg-green-600 h-2.5 rounded-full dark:bg-blue-500"
									style={{ width: 90 + "%" }}></div>
							</div>
						</div>
						<h1
							dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
							className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mx-10"></h1>
						<div className="flex flex-wrap gap-4 justify-center mx-10 scale-90 lg:scale-100">
							<QuizAnswerButton answer="George Orwell" datanumber="1" />
							<QuizAnswerButton answer="George Orwell" datanumber="2" />
							<QuizAnswerButton answer="George Orwell" datanumber="3" />
							<QuizAnswerButton answer="George Orwell" datanumber="4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
