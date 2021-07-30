# Game Search - Video Game Search Tool

## Description

The [Game-Search](https://katharinechumble.github.io/miniature-fiesta/) application is a functional video game search tool created by our group, with the intent of delivering an MVP of being able to search for a game, and display results. This application will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that we have written, using our experience on prior modules as a basis. It uses two different server-side API calls; the first is through RAWG (https://api.rawg.io/docs/), while the second is through Youtube (https://developers.google.com/youtube/v3). Foundation was chosen as the primary CSS framework

## Usage

Here is a link to and screenshot of the deployed application, along with a link to the GitHub repository:

![Game-Search](assets/images/Game-Search-Screenshot.png)

[Game-Search-Repo](https://github.com/katharinechumble/miniature-fiesta)

## User Story

AS A parent with children who play video games,

I WANT to be able to search for a video game title,

SO THAT I can see examples of game descriptions and Youtube videos of gameplay.

## Future State

To build upon what we have created, we see the future state of this application adding certain features, such as:
1)Adding more API's or other data from exisiting API's for even more detailed information about the games
2)Making adjustments to the appearance of the application, making it even more user-friendly
3)Add more functions in JS to create more complex search methods (for instance, our application currently only pulls the game for exact spelling requirements for the API, so things like semicolons still throw off searches. In a future state, we would add code to make this more user-friendly, along with also adding modals in response to null inputs; for example, if a user does not enter anything but clicks enter, a modal would pop open asking them to enter a valid game name, and maybe give helpful hints in succession)
4)Currently, the way the application works with the Youtube API pulls up the most popular Youtube video with the search result of the game name; this however causes problems when the game name is also similar to something else really popular (for example, searching halo correctly brings up results for the halo video game, but the Youtube video corresponding with the search actually brings up Beyonce's Halo song), so a future state would remedy this problem, most likely with an additional API, or more stringent search parameters.
