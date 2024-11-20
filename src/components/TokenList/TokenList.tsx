interface TokenListProps {
  tokenData: string;
  setopenTokenBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const TokenList: React.FC<TokenListProps> = ({ tokenData, setopenTokenBox }) => {
  return (
    <div>
      <p>{tokenData}</p>
      <button onClick={() => setopenTokenBox(false)}>Close</button>
    </div>
  );
};

export default TokenList;