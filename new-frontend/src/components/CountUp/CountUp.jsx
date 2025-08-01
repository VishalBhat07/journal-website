import React, { useState, useEffect, useRef } from "react";
import "./CountUp.css";

const CountUp = ({
  from = 0,
  to,
  separator = ",",
  direction = "up",
  duration = 1,
  className = "",
  onComplete,
}) => {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  // Count animation logic
  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = direction === "up" ? from : to;
    const endValue = direction === "up" ? to : from;
    const totalChange = endValue - startValue;
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + totalChange * easeOutQuart;

      setCount(Math.floor(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, from, to, direction, duration, onComplete]);

  // Format number with separator
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  };

  return (
    <span ref={elementRef} className={className}>
      {formatNumber(count)}
    </span>
  );
};

export default CountUp;
