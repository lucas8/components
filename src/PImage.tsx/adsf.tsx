import React, { Component } from "react";
import styled from "styled-components";

const omit = (obj: any, omitKey: any) => {
  return Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      (result as any)[key] = obj[key];
    }
    return result;
  }, {});
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  filter: "blur(1px)",
  transition: "opacity ease-in 1000ms",
  clipPath: "inset(0)"
};

interface PImageProps {
  overlaySrc: string;
  src: string;
  className?: string;
}

interface PImageState {
  highResImageLoaded: boolean;
}

export default class PImage extends Component<PImageProps, PImageState> {
  highResImage: HTMLImageElement | null;

  constructor(props: any) {
    super(props);
    this.highResImage = null;
    this.state = {
      highResImageLoaded: false
    };
  }

  render() {
    const { overlaySrc } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");

    return (
      <Container>
        <DisplayImage
          onLoad={() => this.setState({ highResImageLoaded: true })}
          ref={img => (this.highResImage = img)}
          src={this.props.src}
          {...(!highResImageLoaded && {
            style: { display: "none" }
          })}
        />
        <PreloadedImage
          {...filteredProps}
          className={`${this.props.className} ${overlayStyles}`}
          {...(highResImageLoaded && {
            style: { opacity: "0" }
          })}
          src={overlaySrc}
        />
      </Container>
    );
  }
}

const Container = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PreloadedImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(1px);
  transition: opacity ease-in 1000ms;
  clip-path: inset(0);
`;

const DisplayImage = styled.img`
  width: 100%;
  height: 100%;
`;
