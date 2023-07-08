import React, { useState } from "react";
import classes from "./Game.module.scss";
import { Button, Card, Checkbox, Col, Pagination, Row } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { quiz } from "../question";

const { Title } = Typography;

let result = 0;

export const Game = () => {
	const [stop, setStop] = React.useState(false);
	const [activeCheckbox, setActiveCheckbox] = React.useState(
		new Array(quiz.length).fill(null)
	);

	const stopAndResult = () => {
		quiz.map((el, idx) => {
			if (el.answer == activeCheckbox[idx]) result++;
		});
		setStop(true);
		console.log(result);
	};
	return (
		<Row>
			<Col span={12} offset={6}>
				<Title className={classes.title}>Это тест по Гарри Поттеру</Title>
				{quiz.map((el, position) => (
					<Card
						key={el.question}
						title={el.question}
						bordered={true}
						style={{ marginBottom: 20 }}
					>
						<div className={classes.cardContent}>
							{el.options.map((text, index) => (
								<Checkbox
									key={text}
									checked={index === activeCheckbox[position]}
									onClick={() => {
										if (!stop)
											setActiveCheckbox([
												...activeCheckbox.slice(0, position),
												index,
												...activeCheckbox.slice(position + 1),
											]);
									}}
								>
									{text}
								</Checkbox>
							))}
						</div>
					</Card>
				))}
				<Button
					type="primary"
					size="large"
					style={{ marginBottom: 20 }}
					onClick={stopAndResult}
					block
				>
					Проверить ответы
				</Button>
				{stop && (
					<center style={{ margin: 50 }}>
						<SmileOutlined
							style={{ fontSize: 70, color: "#1677ff", marginBottom: 20 }}
						/>
						<Title level={4}>
							Верных ответов {result} из {quiz.length}
						</Title>
					</center>
				)}
				{quiz.length > 5 && (
					<center>
						{/* пока что бесполезная вещь */}
						<Pagination defaultCurrent={1} total={quiz.length} pageSize={5} />
					</center>
				)}
			</Col>
		</Row>
	);
};
