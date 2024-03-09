import React from "react";
import "./index.css";
export declare const days: string[];
export declare const months: string[];
interface CalendarProps {
    bgcolor?: string;
    text?: string;
    borderWidth?: string;
    dateHeight?: string;
    currDateBg?: string;
}
export default function Calendar({ bgcolor, text, borderWidth, dateHeight, currDateBg, }: CalendarProps): React.JSX.Element;
export {};
