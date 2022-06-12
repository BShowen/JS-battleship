export default function Player(playerName) {
  const _name = playerName;

  const getName = () => _name;

  return { getName };
}
