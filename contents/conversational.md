<frontmatter>
  layout: default.md
  pageNav: 4
</frontmatter>

# Motivation
Notes of whatever resources that I have looked into on the topic of Conversational Agent.


What Makes a Good Conversation? Challenges in Designing Truly Conversational Agents
https://www.youtube.com/watch?v=QrESSP5Jrps


## 2022 HAI Fall Conference on AI in the Loop: Humans in Charge

### Panel I: Designing for AI

https://youtu.be/SbIN4bFl-Es

#### Unpredictable Black Boxes are Terrible Interfaces

Presenter: Maneesh Agrawala, Standford University

- A good conceptual model let's users predict how input controls affect the output
- When the conceptual model is not predictive, users resort to trial-and-error
- Reason why black box AIs (humans as well) are terrible interfaces
  - cannot predict how input prompt affects output image
  - does not understand the context and expectation of a given word (which can mean a lot of things, at various intensity)
- How to fix it?
  - have conceptual model based on model of self (human, which we likely understand better)
  - allow conversational interactions to
    - build common ground/shared semantics
    - repair or fix ambiguity/misunderstanding
    - iteractions still required
- What happens with black box AI
  - conceptual model either is non-existent or incorrect
  - no conversation: each prompt generates new output
  - lots of trial-and-error
- New research migh want to focus on:
  - establishing common ground/shared semantics
  - repair mechanisms
  - conversation via program code


#### Measuring what matters for human-AI teams

Presenter: Saleema Amershi, Microsoft

- Human-centered experiences require human-centered metrics
  - examples of code generation and how to improve the system by using alternative metrics such as edit distance/similarity on top of pass@k suggestion
