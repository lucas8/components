import React, { ImgHTMLAttributes, useState, useEffect } from "react";
import styled from "styled-components";

interface LoadableImageProps {
  loaded: boolean;
  src: string;
}

const LoadableImage = styled.div<LoadableImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: filter ease 1s;
  filter: ${props => (!props.loaded ? "blur(3px)" : "unset")};
  background-image: url(${props => props.src});
  background-position: 50% 50%;
  background-origin: border-box;
  background-size: cover;
`;

interface PImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholder: any;
  image: any;
}

export default function PImage({ placeholder, image, ...rest }: PImageProps) {
  const runOnce = true;
  const [loadState, setLoadState] = useState({
    src: placeholder,
    loaded: false
  });

  useEffect(() => {
    const img = new Image();

    img.onload = function() {
      setLoadState({
        src: img.src,
        loaded: true
      });
    };

    img.src = image;
  }, [image, runOnce]);

  return <LoadableImage {...rest} {...loadState} />;
}
