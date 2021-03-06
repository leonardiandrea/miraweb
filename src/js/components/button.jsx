import classnames from "classnames";
import omit from "lodash/omit";
import React from "react";

const BASE_CLASS = "mw-button";

export default class Button extends React.Component {

	render() {
		const classes = [
			BASE_CLASS,
			this.props.className,
			`${BASE_CLASS}--style--${this.props.buttonStyle}`,
			{
				[`${BASE_CLASS}--expand`] : this.props.expand,
				[`${BASE_CLASS}--size--${this.props.size}`] : this.props.buttonStyle !== "none"
			}
		];

		const props = omit(this.props,
			"buttonStyle",
			"className",
			"expand",
			"disabled",
			"size",
			"type"
		);

		return (
			<button
				{ ...props }
				className={ classnames(classes) }
				type={ this.props.type !== "button" ? this.props.type : null }
				disabled={ this.props.disabled }
			>
				{ this.props.children }
			</button>
		);
	}
}

Button.propTypes = {
	expand : React.PropTypes.bool,
	disabled : React.PropTypes.bool,
	size : React.PropTypes.oneOf(["sm", "md", "lg"]),
	buttonStyle : React.PropTypes.oneOf(["primary", "secondary", "success", "warn", "error"]),
	type : React.PropTypes.oneOf(["button", "submit"])
};

Button.defaultProps = {
	expand : false,
	disabled : false,
	size : "md",
	buttonStyle : "primary",
	type : "button"
};
