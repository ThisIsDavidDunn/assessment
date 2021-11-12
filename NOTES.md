# Development

## Context vs Passing props

I wasn't sure if the entire AccountOverview component was intended to be used as a kind of 'widget' where AccountOverview and its children would always be rendered together or if there was a use case for the details or the sales details to also be rendered independently.

Based on these requirements:

- The design split into several components
- Usage of `proptypes`

and the structure of the base project I made the assumption that the sales and support should be accepting props and possible to be rendered independantly of the AccountOverview component.

If the above assumption wasn't made I think it would have been better to use the `useContext` hook to avoid having to pass props around, it may have also have been a suitable usecase to employ the Compound Components pattern.

## Prop-Types

It has been a while since I've used `Prop-Types` I personally use TypeScript to enforce the typing and requirement of props within components. I've included Proptype definitions for all components created in a manner that made sense to me.

## Styled-Components

I've never used `Styled-Components` before but I have used a similar library called `emotion` so I implemented the styling using `Styled-Components` as requested in the task.

Thanks for providing a fun task for me to work on!
