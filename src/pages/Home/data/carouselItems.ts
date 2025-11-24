import { images, icons } from "@/shared/assets";

interface ICarouselItemData {
	img: string;
	title: string;
	features: { icon: string; text: string }[];
}

export const carouselItemsData: ICarouselItemData[] = [
	{
		img: images.fileServiceCardImg,
		title: "Smart File Hub",
		features: [
			{
				icon: icons.cloud,
				text: "Upload and access files",
			},
			{
				icon: icons.slidersHorizontal,
				text: "Files organization",
			},
			{
				icon: icons.share,
				text: "Files sharing",
			},
			{
				icon: icons.book,
				text: "AI summarization files",
			},
		],
	},
	{
		img: images.meetingServiceCardImg,
		title: "Meeting Room",
		features: [
			{
				icon: icons.video,
				text: "Start and join meetings",
			},
			{
				icon: icons.audio,
				text: "Auto-Recording sessions",
			},
			{
				icon: icons.lightbulb,
				text: "AI summaries and task extraction",
			},
		],
	},
	{
		img: images.chatbotServiceCardImg,
		title: "AI Chatbot",
		features: [
			{
				icon: icons.audio,
				text: "Auto-Recording Meetings",
			},
			{
				icon: icons.play,
				text: "Video and files summarization",
			},
			{
				icon: icons.lightbulb,
				text: "Key insights extraction",
			},
			{
				icon: icons.book,
				text: "Making Quizzes",
			},
		],
	},
	{
		img: images.calendarServiceCardImg,
		title: "Calendar Creation",
		features: [
			{
				icon: icons.calendar,
				text: "Create and update your calendar",
			},
			{
				icon: icons.calendarPlus,
				text: "Add tasks",
			},
			{
				icon: icons.slidersHorizontal,
				text: "Organize your schedule",
			},
		],
	},
	{
		img: images.mailServiceCardImg,
		title: "Mail Service",
		features: [
			{
				icon: icons.mail,
				text: "Manage your emails",
			},
			{
				icon: icons.send,
				text: "Send and schedule emails",
			},
		],
	},
	{
		img: images.chattingServiceCardImg,
		title: "Chatting and Contacts Creation",
		features: [
			{
				icon: icons.speech,
				text: "Connected with your team",
			},
			{
				icon: icons.frame,
				text: "Create contacts for collaboration",
			},
			{
				icon: icons.users,
				text: "Invite your colleagues",
			},
		],
	},
];
