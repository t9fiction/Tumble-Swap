// Define types for the props passed to Search
interface SearchProps {
  openToken: React.Dispatch<React.SetStateAction<boolean>>; // Function to update the state
  tokens: React.Dispatch<React.SetStateAction<{ name: string; image: string }>>; // Function to update token
  tokenData: string; // Data for tokens
}

// Define the Search component
const Search: React.FC<SearchProps> = ({ openToken, tokens, tokenData }) => {
  return (
    <div>
      <p>Token Data: {tokenData}</p>
      <button onClick={() => openToken(false)}>Close</button>
    </div>
  );
};

export default Search;
