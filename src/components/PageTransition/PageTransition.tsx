import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { ReactNode } from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";

const timeout = 300;

interface TransitionStyles {
  entering: CSSProperties;
  entered: CSSProperties;
  exiting: CSSProperties;
  exited: CSSProperties;
  unmounted: CSSProperties;
}

const getTransitionStyles: TransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
  exited: {},
  unmounted: {}
}

interface PageTransitionProps {
  children: ReactNode;
  location: any;
  
}

const PageTransition = ({ children, location}: PageTransitionProps) => {
  return (
    <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {status => (
        <div
          style={{
            ...getTransitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
  );
}

export default PageTransition;