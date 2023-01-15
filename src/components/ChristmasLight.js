import React from "react";
import "./ChristmasLight.css";

class ChristmasLight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({isToggleOn: !prevState.isToggleOn}));
    }

    render() {
        return (
            <div
                onClick={this.handleClick}
                className={`border-slate-900 h-4 lg:h-8 w-[0.4rem] lg:w-[0.8rem] border-t-4 lg:border-t-8 mt-[0.1rem] lg:mt-[0.2rem] opacity-80 christmas-light christmas-light-${
                    this.props.light
                } ${
                    this.state.isToggleOn
                    && "christmas-light-" + this.props.light + "-anim"
                }`}
            />
        );
    }
}

export default function ChristmasLights({lights}) {
    return (
        <>
            {lights.map((light, index) => (
                <ChristmasLight key={index} light={light}/>
            ))}
        </>
    );
}
