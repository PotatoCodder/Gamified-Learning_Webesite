
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";

const QuizApp = () => {
  const questions = [
    {
        "label": "Still I Rise by Maya Angelou\nYou may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I'll rise.\n\nDoes my sassiness upset you?\nWhy are you beset with gloom?\n’Cause I walk like I've got oil wells\nPumping in my living room.\n\nJust like moons and like suns,\nWith the certainty of tides,\nJust like hopes springing high,\nStill I'll rise.\n\nDid you want to see me broken?\nBowed head and lowered eyes?\nShoulders falling down like teardrops,\nWeakened by my soulful cries?\n\nDoes my haughtiness offend you?\nDon't you take it awful hard\n’Cause I laugh like I've got gold mines\nDiggin’ in my own backyard.\n\nYou may shoot me with your words,\nYou may cut me with your eyes,\nYou may kill me with your hatefulness,\nBut still, like air, I’ll rise.\n\nDoes my sexiness upset you?\nDoes it come as a surprise\nThat I dance like I've got diamonds\nAt the meeting of my thighs?\n\nOut of the huts of history’s shame\nI rise\nUp from a past that’s rooted in pain\nI rise\nI'm a black ocean, leaping and wide,\nWelling and swelling I bear in the tide.\n\nLeaving behind nights of terror and fear\nI rise\nInto a daybreak that’s wondrously clear\nI rise\nBringing the gifts that my ancestors gave,\nI am the dream and the hope of the slave.\nI rise\nI rise\nI rise.",
      question: "What upsets the one addressed by the persona in the poem? (Literal)",
      options: {
        A: "the persona’s arrogance",
        B: "the persona’s boldness",
        C: "the persona’s rudeness",
        D: "the persona’s weakness"
      },
      answer: "B"
    },
    {
      question: "What does 'trod' in the first stanza mean? (Inferential)",
      options: {
        A: "bend over",
        B: "blow over",
        C: "step over",
        D: "take over"
      },
      answer: "C"
    },
    {
      question: "Which of the following is implied about the persona in the poem?",
      options: {
        A: "The persona is a dancer.",
        B: "The persona is a slave.",
        C: "The persona is black.",
        D: "The persona is rich."
      },
      answer: "C"
    },
    {
      question: "Which of the following lines contain a figure of speech?",
      options: {
        A: "But still, like dust, I'll rise.",
        B: "Cause I walk like I've got oil wells",
        C: "Does my haughtiness offend you?",
        D: "Leaving behind nights of terror and fear"
      },
      answer: "A"
    },
    {
      question: "What is the general tone of the poem?",
      options: {
        A: "defiant",
        B: "doubtful",
        C: "happy",
        D: "optimistic"
      },
      answer: "A"
    },
    {
      question: "What is the rhyming pattern evident in the first stanza? (Literal)",
      options: {
        A: "AABC",
        B: "ABBC",
        C: "ABCB",
        D: "ABCA"
      },
      answer: "C"
    },
    {
      question: "To what sense do the lines 'Into a daybreak that’s wondrously clear, I rise' appeal to?",
      options: {
        A: "sense of hearing",
        B: "sense of sight",
        C: "sense of smell",
        D: "sense of touch"
      },
      answer: "B"
    },
    {
      question: "What relationship is evident between the persona speaking in the poem and the person she is talking with? (Critical)",
      options: {
        A: "a bully to a bullied",
        B: "a defender to an ally",
        C: "a friend to a friend",
        D: "a leader to a follower"
      },
      answer: "A"
    },
    {
      question: "Who are being addressed in the poem?",
      options: {
        A: "Those who experienced being abused.",
        B: "Those who felt extremely depressed.",
        C: "Those who lost interest in their lives.",
        D: "Those who were not appreciated."
      },
      answer: "A"
    },
    {
      question: "Which of the following techniques did the author use in emphasizing the theme? (Critical)",
      options: {
        A: "Figures of speech such as metaphors are used.",
        B: "Rhyming patterns were used in every stanza.",
        C: "Significant lines were repeated all throughout the poem.",
        D: "The events are narrated using the third person point of view."
      },
      answer: "C"
    },
    
    {
      label: "Prevention is better than cure. Mental health comprises our emotional, psychological, and social well-being. It impacts how we feel, think, and behave every day. Additionally, it is our capacity to make choices, form connections, and influence the environment in which we live in. It is a fundamental human right. Furthermore, it is essential for our socioeconomic and personal growth.\n\nMental health is important because it affects everything. By taking care of it, we can be resilient and recover quickly from anything. Anyone out there can have a miserable day, but that does not necessarily indicate that their life is horrible. The important thing is how we handle it and sustain our mental well-being.\n\nWhen our minds are in good shape, we appreciate our lives, our surroundings, and the people that inhabit them. We can take any risks, learn new things, and innovate. We will be better equipped to handle challenging situations in both our work and personal life. We may experience the pain and frustration that can come from a loved one's passing, a job loss, and other tough situations, but eventually, we are able to move on and resume enjoying our lives.\n\nMental illness is common. It can happen at any age, from childhood to later in adult lives, although most cases start at a younger age. It can have short-term or long-term impacts. Besides this, it is also possible to experience many mental health disorders simultaneously.\n\nYou may be more likely to have a mental disorder if you have certain risk factors, such as: childhood abuse, trauma neglect, experiencing discrimination and racism, losing someone close to you, severe or long-term stress, domestic violence, bullying or other abuse as an adult, having a long-term physical health condition, unemployment or losing your job, and other lifestyle factors.\n\nAccording to the World Health Organization (WHO), among Filipino children aged 5 to 15, 10% to 15% are affected by mental health problems and 6.8% of Filipino students aged 13 to 17 have attempted suicide at least once within a year before the 2015 Global School-based Student Health survey.\n\nOn the other hand, untreated mental illness can cause serious issues with emotion, behavior, and physical health. These are some of the problems that might arise from mental illness: Unhappiness and decreased enjoyment of life; family conflicts; social isolation; problems with alcohol and other drugs; missed work or school; and the worst, suicide. To prevent this, we should make social connections, talk to someone you trust, get enough sleep, eat a healthy diet, get physical exercise, learn new skills, meditate daily, and ask for help when needed.\n\nThe most priceless gift that God has given us is our life. We should not waste our lives on trivial matters. Let's also be mindful of others' concerns by being empathetic or compassionate and following up with them as frequently as possible. Let's work together to spread the word about this issue so that we can guard our loved ones and families.",
      question: "Which of the following statements defines mental health? (Literal)",
      options: {
        A: "It enables one to c",
        B: "It is the ability to make sound decisions and form connections.",
        C: "It is the condition of the body resulting from regular physical activity.",
        D: "It refers to active participation in organized social organizations."
      },
      answer: "B"
    },
    {
      question: "Which of the following pertain/s to risk factors to having a mental disorder? (Literal)",
      options: {
        A: "I, II, III & IV",
        B: "I, II, III & V",
        C: "I, II, VI & V",
        D: "I, II, V & VI"
      },
      answer: "D"
    },
    {
      question: "Which of the following situations is influenced by a mind in good shape? (Inferential)",
      options: {
        A: "Being dependent on comfort food",
        B: "Getting compliments from peers",
        C: "Identifying de-stressing activity",
        D: "Isolating self from social media"
      },
      answer: "C"
    },
    {
      question: "Which mental health factor is depicted in the given situation below? (Inferential)\n'A person suffers from physical pain due to the months of beating done by the spouse.'",
      options: {
        A: "child abuse",
        B: "domestic violence",
        C: "long-term stress",
        D: "unemployment"
      },
      answer: "B"
    },
    {
      question: "Which of the following completes the analogy below? (Critical)\nEnough sleep: Healthy mind: ___________________ : Mental illness",
      options: {
        A: "lack of sleep",
        B: "over-eating",
        C: "drug abuse",
        D: "unhealthy diet"
      },
      answer: "A"
    },
    {
      question: "What does 'empathetic' mean in the following sentence? (Inferential)\n'Let's also be mindful of others' concerns by being empathetic or compassionate and following up with them as frequently as possible.'",
      options: {
        A: "appreciative",
        B: "encouraging",
        C: "responsible",
        D: "understanding"
      },
      answer: "D"
    },
    {
      question: "Which of the following is true based on the text? (Critical)",
      options: {
        A: "Untreated mental illness causes serious issues with emotion and physical health.",
        B: "It is also impossible to experience many mental health disorders simultaneously.",
        C: "Increased enjoyment of life and closed family ties arise from one’s mental illness.",
        D: "Mental wellness is achieved from family conflicts, social isolation, and..."
      },
      answer: "A"
    },
    {
      question: "Who became known as the Magician of Movies?",
      options: ["George Bush", "George Clooney", "George M'elies", "George Smith"],
      answer: "George M'elies"
    },
    {
      question: "How did Mr. M'elies invent the special effects?",
      options: ["by accident", "through experiment", "through a magic show", "by asking people"],
      answer: "by accident"
    },
    {
      question: "What gadget was he using when he discovered the special effects?",
      options: ["television", "computer", "radio", "camera"],
      answer: "camera"
    },
    
    {
      label: "George Méliès, a French movie maker and a former magician, happened to invent special effects in movies by accident. He was filming a street scene in Paris when his camera suddenly jammed as a bus was passing by. He stopped, fixed his camera, then went back to filming the same street scene again. When the film was developed, he was surprised to see a carriage in the place where the bus had been! He discovered that the bus had changed into a carriage! From that day on, Mr. Méliès invented many amazing techniques using his camera. He became known as 'the magician of movies.' A common special effect he invented is called projections.\n\nIn this effect, a moviemaker projects a picture or a movie on a screen behind the actors. The actors act in front of the screen. Then the camera films the actors and the picture or the movie at the same time. This effect makes it possible for actors to look like they are in imaginary places. Other special effects Mr. Méliès created are:\n\n- **Animation**: which makes lifeless models or objects come to life when they are shown on screen.\n- **Matte shots**: enabling the moviemaker to cover or matte out part of a film that he doesn't want.\n- **Optical printer and computer-age special effects**.",
      question: "Which of the following was not invented by M'elies?",
      options: ["Animation", "Projection", "Matte Shots", "Still Life"],
      answer: "Still Life"
    },
    {
      question: "What special effect makes it possible for actors to look like they are in imaginary places?",
      options: ["Projection", "Optical Printer", "Computer-age special effect", "Matte Shots"],
      answer: "Projection"
    },
    {
      question: "What kind of special effect would be used to bring a dinosaur back to life?",
      options: ["Matte Shots", "Projection", "Animation", "Optical Printer"],
      answer: "Animation"
    },
    {
      question: "What will happen to a movie without special effects?",
      options: ["It will draw a lot of moviegoers.", "It will not be appealing.", "It will be rich in cinematic appeal.", "It will not earn popularity."],
      answer: "It will not be appealing."
    },
    {
      question: "Why do you think George M'elies was called 'the magician of movies'?",
      options: ["He played the role of a magician in movies several times.", "His inventions were made into a movie.", "He studied magic before he became a movie maker.", "He accidentally invented special effects in movies."],
      answer: "He accidentally invented special effects in movies."
    },
    {
      question: "Which of the following sayings reflect the main problem of the story?",
      options: ["Don't count your chickens before they hatch", "Lower an eyelash unless he is a steady winner", "Shallow men believe in luck. Strong men believe in cause and effect."],
      answer: "Don't count your chickens before they hatch"
    },
    {
      question: "What change in the trait of the two characters can be observed in the story?",
      options: ["ambitious - stingy", "considerate - quarrelsome", "contented - selfish", "loving - unkind"],
      answer: "contented - selfish"
    },
    {
      question: "What does the lottery ticket symbolize based on the behavior of the two characters?",
      options: ["ambition", "dreams", "greed", "success"],
      answer: "greed"
    },
    {
      question: "What is the overall feeling created in the story?",
      options: ["cold", "desperate", "embarrassed", "ominous"],
      answer: "ominous"
    },
    {
      question: "How is the woman perceived by the other character in the story?",
      options: ["burdened and boring", "old and ugly", "sentimental and reserved", "introvert and weak"],
      answer: "burdened and boring"
    },
    
    {
      label: "Ivan Dmitritch pictured to himself autumn with its rains, its cold evenings, and its St. Martin's summer. At that season he would have to take longer walks about the garden and beside the river, so as to get thoroughly chilled, and then drink a big glass of vodka and eat a salted mushroom or a soused cucumber, and then--drink another.... The children would come running from the kitchen-garden, bringing a carrot and a radish smelling of fresh earth.... And then, he would lie stretched full length on the sofa, and in leisurely fashion turn over the pages of some illustrated magazine, or, covering his face with it and unbuttoning his waistcoat, give himself up to slumber.\n\nThe St. Martin's summer is followed by cloudy, gloomy weather. It rains day and night, the bare trees weep, the wind is damp and cold. The dogs, the horses, the fowls--all are wet, depressed, downcast. There is nowhere to walk; one can't go out for days together; one has to pace up and down the room, looking despondently at the grey window. It is dreary!\n\nIvan Dmitritch stopped and looked at his wife.\n\n'I should go abroad, you know, Masha,' he said.\n\nAnd he began thinking how nice it would be in late autumn to go abroad somewhere to the South of France... to Italy ... to India!\n\n'I should certainly go abroad too,' his wife said. 'But look at the number of the ticket!'\n\n'Wait, wait!..'\n\nHe walked about the room and went on thinking. It occurred to him: what if his wife really did go abroad? It is pleasant to travel alone, or in the society of light, careless women who live in the present, and not such as think and talk all the journey about nothing but their children, sigh, and tremble with dismay over every farthing. Ivan Dmitritch imagined his wife in the train with a multitude of parcels, baskets, and bags; she would be sighing over something, complaining that the train made her head ache, that she had spent so much money... At the stations he would continually be having to run for boiling water, bread and butter... She wouldn't have dinner because of its being too dear....\n\n'She would begrudge me every farthing,' he thought, with a glance at his wife. 'The lottery ticket is hers, not mine! Besides, what is the use of her going abroad? What does she want there?'",
      question: "What is the main lesson that one can learn from the passage?",
      options: ["Desire for money can potentially ruin one's relationship with other people.", "People should not completely rely on a game of chance.", "Taking risks is not worth it after all.", "Be mature enough to be responsible in one's relationship."],
      answer: "Desire for money can potentially ruin one's relationship with other people."
    },
    {
      question: "Which of the following words found in Paragraph 2 is the opposite of the underlined word?",
      options: ["bold", "disguise", "modest", "scornful"],
      answer: "modest"
    },
    {
      question: "What does Arachne’s weaving show?",
      options: ["abuses made by the gods", "naughtiness of the gods", "rudeness of the gods", "weaknesses of the gods"],
      answer: "abuses made by the gods"
    },
    {
      question: "What does the selection intend to accomplish?",
      options: ["To explain a natural phenomenon", "To narrate the origin of something", "To teach an important lesson", "To tell an exaggerated story"],
      answer: "To narrate the origin of something"
    },
    {
      question: "Why did Athena become angry with Arachne?",
      options: ["Arachne was a great weaver of a tapestry.", "Arachne’s beauty is beyond compare.", "Arachne’s creations are better than hers.", "Arachne’s works are expensive and rare."],
      answer: "Arachne’s creations are better than hers."
    },
    {
      question: "Which of the following is NOT a characteristic of Arachne?",
      options: ["Confident. She believed that she could defeat Athena at weaving.", "Disobedient. She did not follow Athena’s advice to be humble.", "Talented. She was exceptionally good at weaving beautiful tapestries.", "Ungrateful. She was not thankful to Athena for teaching her to weave."],
      answer: "Ungrateful. She was not thankful to Athena for teaching her to weave."
    },
    {
      question: "Which of the following is similar in purpose to this selection?",
      options: ["Fable", "Folktale", "Legend", "Parable"],
      answer: "Legend"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestion].answer) {
        const newScore = score + 1;
        setScore(newScore);
        localStorage.setItem('quiz', newScore.toString());
      }
      setSubmitted(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  // Error checking
  if (!questions || questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  if (!currentQuestionData || !currentQuestionData.options) {
    return <div>Error: Invalid question data.</div>;
  }

  return (
    <motion.div 
      className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">{currentQuestionData.question}</h3>
        <div className="space-y-3">
          {Object.entries(currentQuestionData.options).map(([key, value]) => (
            <label key={key} className="block">
              <input
                type="radio"
                name="answer"
                value={key}
                checked={selectedOption === key}
                onChange={handleOptionChange}
                disabled={submitted}
                className="sr-only"
              />
              <span className={`block w-full p-3 rounded-lg transition-colors ${
                selectedOption === key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                {value}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {!submitted ? (
          <button 
            onClick={handleSubmit} 
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            disabled={!selectedOption}
          >
            Submit
          </button>
        ) : (
          <button 
            onClick={handleNext} 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Next
          </button>
        )}
      </div>
      <div className="mt-4 text-center text-gray-600">
        Current Score: {score}/{questions.length}
      </div>
    </motion.div>
  );
};

export default QuizApp;