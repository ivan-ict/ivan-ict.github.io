"use client";
import { clsx } from "clsx";
import { useLocation } from "react-router";
import { useState } from "react";
import ReactMediumImageZoom, {
  type UncontrolledProps,
} from "react-medium-image-zoom";

let loadedImages: string[] = [];

function useImageLoadedState(src: string) {
  const location = useLocation();
  const uniqueImagePath = `${location.pathname}__${src}`;
  const [loaded, setLoaded] = useState(() =>
    loadedImages.includes(uniqueImagePath)
  );

  return [
    loaded,
    () => {
      if (loaded) return;
      loadedImages.push(uniqueImagePath);
      setLoaded(true);
    },
  ] as const;
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export function Image(props: ImageProps) {
  const { alt, src, loading = "lazy", style, className, ...rest } = props;
  const [loaded, onLoad] = useImageLoadedState(src);

  return (
    <div
      className={clsx(
        "image-container relative overflow-hidden",
        !loaded && "animate-pulse [animation-duration:4s]",
        className
      )}
    >
      <img
        className={clsx(
          "transition-all duration-500 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
          "h-full max-h-full w-full object-center",
          loaded ? "blur-0" : "blur-xl"
        )}
        src={src}
        alt={alt}
        style={{ objectFit: "cover", ...style }}
        loading={loading}
        onLoad={onLoad}
        {...rest}
      />
    </div>
  );
}

interface ZoomProps extends UncontrolledProps {
  children: React.ReactNode;
}

export function Zoom(props: ZoomProps) {
  const { children, classDialog, ...rest } = props;

  return (
    <ReactMediumImageZoom
      zoomMargin={20}
      classDialog={clsx([
        "[&_[data-rmiz-modal-img]]:rounded-lg",
        "[&_[data-rmiz-btn-unzoom]]:hidden",
        '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80',
        classDialog,
      ])}
      {...rest}
    >
      {children}
    </ReactMediumImageZoom>
  );
}
