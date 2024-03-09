"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.months = exports.days = void 0;
const react_1 = __importDefault(require("react"));
require("./index.css");
const cn_1 = __importDefault(require("./cn"));
const lucide_react_1 = require("lucide-react");
const react_2 = require("react");
exports.days = ["S", "M", "T", "W", "T", "F", "S"];
exports.months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
function Calendar({ bgcolor, text, borderWidth, dateHeight, currDateBg, }) {
    const containerStyle = {
        backgroundColor: bgcolor ? bgcolor : "#000",
        color: text ? text : "#fff",
    };
    const borderStyle = {
        borderColor: text ? text : "#fff",
        borderBottomWidth: borderWidth ? borderWidth : "1px",
        height: dateHeight ? dateHeight : "5rem",
    };
    const currentDate = new Date();
    const generateDates = (year, month) => {
        const date = new Date();
        const firstDayOfMonth = new Date(year, month, 1);
        const startingDay = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in month
        const arrOfDates = [];
        // Placeholder for empty slots
        for (let i = 0; i < startingDay; i++) {
            arrOfDates.push({
                currentMonth: false,
                date: null,
                today: false,
            });
        }
        // Fill in the days of the month
        for (let i = 1; i <= totalDaysInMonth; i++) {
            arrOfDates.push({
                currentMonth: date.getMonth() === today.getMonth(),
                date: i,
                today: date.getDate() === i,
            });
        }
        return arrOfDates;
    };
    const [today, setToday] = (0, react_2.useState)(currentDate);
    const nextMonth = () => {
        const nextMonthDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        setToday(nextMonthDate);
    };
    const previousMonth = () => {
        const previousMonthDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        setToday(previousMonthDate);
    };
    const fetchDate = (date) => {
        const selectedDate = new Date(today.getFullYear(), today.getMonth(), date);
        return selectedDate;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex h-full w-full justify-center py-4", style: containerStyle },
            react_1.default.createElement("div", { className: "lg:w-[80%] h-full w-full" },
                react_1.default.createElement("div", { className: "flex justify-between" },
                    react_1.default.createElement("h1", { className: "font-semibold md:text-3xl" },
                        exports.months[today.getMonth()],
                        ", ",
                        today.getFullYear()),
                    react_1.default.createElement("div", { className: "flex items-center gap-5 md:text-3xl" },
                        react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "w-6 h-6 cursor-pointer", onClick: previousMonth }),
                        react_1.default.createElement("h1", { onClick: () => setToday(currentDate), className: "cursor-pointer" }, "Today"),
                        react_1.default.createElement(lucide_react_1.ChevronRight, { className: "w-6 h-6 cursor-pointer", onClick: nextMonth }))),
                react_1.default.createElement("div", { className: "w-full grid grid-cols-7 font-semibold border-b", style: borderStyle }, exports.days.map((day, index) => {
                    return (react_1.default.createElement("h1", { className: "grid place-content-center text-md", style: { color: currDateBg ? currDateBg : "#DB2777" }, key: index }, day));
                })),
                react_1.default.createElement("div", { className: "w-full grid grid-cols-7 " }, generateDates(today.getFullYear(), today.getMonth()).map(({ date, currentMonth, today }, index) => {
                    return (react_1.default.createElement("div", { key: index, className: "h-20 border-b grid place-content-center", style: borderStyle, onClick: () => fetchDate(date) },
                        react_1.default.createElement("h1", { className: (0, cn_1.default)(today &&
                                currentMonth &&
                                "bg-pink-600 rounded text-white", "h-10 w-10 grid place-content-center", date !== null &&
                                "rounded-full hover:bg-white hover:text-black cursor-pointer"), style: {
                                backgroundColor: today && currentMonth
                                    ? currDateBg
                                        ? currDateBg
                                        : "#DB2777"
                                    : "",
                            } }, date !== null && date)));
                }))))));
}
exports.default = Calendar;
