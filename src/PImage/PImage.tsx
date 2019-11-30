import React, { useState, useEffect, ImgHTMLAttributes } from "react";
import styled from "styled-components";

interface ProgressiveImageProps {
  src: string;
  loaded: boolean;
}

const ProgressiveImage = styled.div<ProgressiveImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: filter 1s ease;
  filter: ${({ loaded }) => (!loaded ? "blur(3px)" : "unset")};
  background-image: url(${({ src }) => src});
  background-position: 50% 50%;
  background-origin: border-box;
  background-size: cover;
  object-fit: cover;
`;

interface PImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  placeholder: string;
  image: string;
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

  return <ProgressiveImage {...rest} {...loadState} />;
}
