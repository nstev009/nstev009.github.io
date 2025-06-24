import React, { useState } from 'react'

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [description, setDescription] = useState("How I Work")

  const workLines = [
    "My first step is always to gather user needs and do research into how I can implement their vision.",
    "Then, I define a functional rubric for how I can get from user needs to a realistic end product.",
    "Next, I take a paper and pen and sketch out my initial ideas for the look. This will change from the start, but it is helpful nonetheless.",
    "Once I know the general look and feel of my project, I'll create some rough prototypes. There's no need for specific tweaking, the goal is to bring the sketch to life.",
    "After the project is functional, I do tests to ensure the user's needs are met.",
    "Lastly, I repeatedly iterate to polish the project. This normally includes specific fonts, colours, etc. This step is important for ensuring the feel is seamless."
  ]

  const handleButtonClick = (index) => {
    setActiveIndex(index)
    setDescription(workLines[index])
  }

  const handleClickOutside = (e) => {
    // Reset if clicking outside any work button
    if (!e.target.closest('.work-btn')) {
      setActiveIndex(null)
      setDescription("How I Work")
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <section id="work">
      <div className="work-btn-row">
        <button 
          className={`work-btn ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleButtonClick(0)}
        >
          1. Research
        </button>
        <button 
          className={`work-btn ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          2. Define
        </button>
        <button 
          className={`work-btn ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          3. Sketch
        </button>
        <button 
          className={`work-btn ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => handleButtonClick(3)}
        >
          4. Prototype
        </button>
        <button 
          className={`work-btn ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => handleButtonClick(4)}
        >
          5. Test
        </button>
        <button 
          className={`work-btn ${activeIndex === 5 ? 'active' : ''}`}
          onClick={() => handleButtonClick(5)}
        >
          6. Iterate
        </button>
      </div>

      <div className="work-desc">
        <p>{description}</p>
      </div>
    </section>
  )
}

export default WorkSection
