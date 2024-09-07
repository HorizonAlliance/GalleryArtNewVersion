"use client";

import React from "react";
import "@/assets/css/button1.css";

export default function ButtonGetStarted() {
    return (
    <button className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;uiverse&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;uiverse&nbsp;</span>
    </button>
    );
}