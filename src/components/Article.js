// Article.js
import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  // Calculate the number of full sets of icons (coffee cups or bento boxes)
  const fullSetCoffeeCups = Math.floor(minutes / 5);
  const fullSetBentoBoxes = Math.floor(minutes / 10);

  // Calculate the remaining minutes after accounting for full sets
  const remainingMinutesCoffee = minutes % 5;
  const remainingMinutesBento = minutes % 10;

  // Determine the number of additional icons needed due to remaining minutes
  const extraIconsCoffee = remainingMinutesCoffee > 0 ? 1 : 0;
  const extraIconsBento = remainingMinutesBento > 0 ? 1 : 0;

  // Generate the icons string for coffee cups
  const coffeeIconString = '☕️'.repeat(fullSetCoffeeCups + extraIconsCoffee);

  // Generate the icons string for bento boxes
  const bentoIconString = '🍱'.repeat(fullSetBentoBoxes + extraIconsBento);

  let minutesText = `${minutes} min read`;

  if (minutes <= 30) {
    // Display coffee cups
    minutesText = `${coffeeIconString} ${minutesText}`;
  } else {
    // Display bento boxes
    minutesText = `${bentoIconString} ${minutesText}`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • <span>{minutesText}</span></small>  
      <p>{preview}</p>
    
    </article>
  );
};

export default Article;
