# Helsinki XR Center – Coding Task 2025

This repository is my solution to the HXRC Coding Task of 2025.

## Coding Tasks

1. Create a better UI for the Tarot card application. ✔️

2. Improve the shuffling logic. ❌

3. Add a hover effect for dealt cards only. ✔️

4. Enhance the README file. ✔️
	- Check down below.

5. Submit your task. ✔️
	- [Deployment](https://hxrc-codetask-2025-marwan-al-obaidi.onrender.com/)

## Improvements to the app

### Gamification

The current mechanics can be further improved to create a Digital Card Battle Game.

#### Objective

Players draw and play cards to reduce their opponents Hit Points (HP) and Shield Points (SP) to zero. Each card has powers based on its meaning, suits, and ranks.

#### Match setup

Each player starts with a full deck of cards. Players start with an equal number of 500 HP. Both decks are shuffled and drawn in an opening hand of 5 cards.

#### Card types & roles

Tarot cards come with two types of cards: Major and Minor Arcana.

**Major Arcanas** are strong cards with impactful abilities.

Example card abilities:

- Death: Instantly discard one card from the opponents hand.
- The Lovers: Swap a card from your hand with an opponents card.
- The Devil: Force the opponent to skip a turn.
- The Empress: Steal 5 HP from the opponent.

**Minor Arcanas** are weaker cards that still offer decent utility. Can be combined with major arcanas to increase potency.

Example card abilities:

- Cups: Healing or shield boost.
- Wands: Healing or damage boost.
- Swords: damage boost.
- Pentacles: shield boost.

Cards are also numbered, which indicate their potency.

Example card combination: Using an Empress card will simply steal 5 HP from the opponent. Combining a Sword 5 card will multiple its effect by 5 resulting in the total of 25 HP being stolen.

#### Areas of consideration

This basic card game requires about a week of development. Further weeks are required if including a backend to deal with online matches, statistics, accounts, and other extras.

### UX improvements

The current applications UI can be improved by moving the cards to be viewed in rows of 4 to save space, especially in mobile views. When cards are clicked/tapped on they can be rotated and turned around freely. A possible description of the card can be shown next to it. If taking into account the gamification, the UI has to be overhauled to allow both players cards and decks to be visible and draggable as a minimum. Other functionality such options and account management must be accessible from the main menu.
