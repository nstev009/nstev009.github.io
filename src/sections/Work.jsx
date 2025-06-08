import { useEffect, useState } from 'react';
import WorkButton from '../components/WorkButton';

function Work() {
  const [description, setDescription] = useState("How I Work");
  const defaultText = "How I Work";
  
  const workLines = [
    "My first step is always to gather user needs and do research into how I can implement their vision.",
    "Then, I define a functional rubric for how I can get from user needs to a realistic end product.",
    "Next, I take a paper and pen and sketch out my initial ideas for the look. This will change from the start, but it is helpful nonetheless.",
    "Once I know the general look and feel of my project, I'll create some rough prototypes. There's no need for specific tweaking, the goal is to bring the sketch to life.",
    "After the project is functional, I do tests to ensure the user's needs are met.",
    "Lastly, I repeatedly iterate to polish the project. This normally includes specific fonts, colours, etc. This step is important for ensuring the feel is seamless."
  ];

  // Handle click outside to reset description
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.work-btn')) {
        setDescription(defaultText);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section id="work">
      <div className="work-btn-row">
        {workLines.map((line, index) => (
          <WorkButton 
            key={index} 
            index={index} 
            text={`${index + 1}. ${['Research', 'Define', 'Sketch', 'Prototype', 'Test', 'Iterate'][index]}`}
            onButtonClick={() => setDescription(workLines[index])}
          />
        ))}
      </div>

      <div className="work-desc">
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Work;