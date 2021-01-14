import React from "react";

export class ErrorBoundary extends React.Component {
state = {
hasError: false,
};
static getDerivedStateFromError(error: any) {
return { hasError: true };
}

componentDidCatch(error: any, errorInfo: any) {
console.log(error);
console.log(errorInfo);

}

render() {
if (this.state.hasError) {
return <h1>Something went wrong.</h1>;
}

return this.props.children;
}
}
