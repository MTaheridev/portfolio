"use client";
import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { IoCloseOutline, IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

type Player = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "Draw" | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [modalVisible, setmodalVisible] = useState<boolean>(false);
  const [gameBlocked, setgameBlocked] = useState<boolean>(true);
  const [tryAgainVisible, setTryAgainVisible] = useState<boolean>(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const copyToClipboard = () => {
    if (headingRef.current) {
      const headingText = headingRef.current.innerText;
      navigator.clipboard
        .writeText(headingText)
        .then(() => {
          toast.success("Copied to clipboard!", {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          console.error("Error copying text: ", err);
        });
    }
  };

  const snarkyMessages: string[] = [
    "Congratulations! You just unlocked 'How Not to Play!'",
    "Looks like you took the scenic route!",
    "Oops! You lost and your dignity too!",
    "Your strategy was bold... and incorrect!",
    "You’ve joined the 'Losers Club' for free!",
    "Not everyone can be a winner, right?",
    "You played like you were blindfolded!",
    "That was a masterclass in losing!",
    "Looks like defeat suits you well!",
  ];

  const generateDiscountVoucher = (): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
    let voucher = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      voucher += characters[randomIndex];
    }
    voucher = "MT30%V" + voucher;
    return voucher;
  };

  const getRandomMessage = (): string => {
    const randomIndex: number = Math.floor(
      Math.random() * snarkyMessages.length
    );
    return snarkyMessages[randomIndex];
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return; // Block if already occupied or there's a winner

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer("O"); // Switch to CPU
  };

  const cpuMove = () => {
    const newBoard = [...board];

    // Check if CPU can win
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = "O";
        if (checkForWin(newBoard, "O")) {
          setBoard(newBoard);
          setWinner("O");
          return;
        }
        newBoard[i] = null; // Reset
      }
    }

    // Block player from winning
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = "X";
        if (checkForWin(newBoard, "X")) {
          newBoard[i] = "O"; // Block
          setBoard(newBoard);
          setCurrentPlayer("X");
          checkWinner(newBoard);
          return;
        }
        newBoard[i] = null; // Reset
      }
    }

    // Random move
    const availableMoves = newBoard
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null) as number[];
    if (availableMoves.length > 0) {
      const randomMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      newBoard[randomMove] = "O";
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer("X");
    }
  };

  const checkForWin = (board: Player[], player: Player) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningCombinations.some((combination) => {
      const [a, b, c] = combination;
      return board[a] === player && board[b] === player && board[c] === player;
    });
  };

  const checkWinner = (board: Player[]) => {
    if (checkForWin(board, "X")) {
      setWinner("X");
      setmodalVisible(true);
      setgameBlocked(true);
    } else if (checkForWin(board, "O")) {
      setWinner("O");
    } else if (board.every((cell) => cell !== null)) {
      setWinner("Draw"); // No winner, it's a draw
      setgameBlocked(true);
    }
  };

  const startGame = () => {
    setTryAgainVisible(false);
    setgameBlocked(false);
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setGameStarted(true);
  };

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden"; // Lock scrolling
    } else {
      document.body.style.overflow = "auto"; // Unlock scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [modalVisible]);

  useEffect(() => {
    if (currentPlayer === "O" && gameStarted && !winner) {
      cpuMove();
    }
  }, [currentPlayer, gameStarted, winner]);

  return (
    <div className="flex flex-col justify-between items-center h-full w-full pb-2 pt-6 select-none">
      <ToastContainer />
      <h1 className="text-[#E0E0E0] text-3xl font-bold">Tic-Tac-Toe</h1>
      <h1 className="text-[#E0E0E0] text-lg font-medium text-center">
        Win the game and get a 30% discount voucher
      </h1>
      <div className="relative">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            margin: 5,
          }}
          className="gap-2"
        >
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={!!winner}
              style={{
                cursor: !!winner ? "not-allowed" : "pointer",
                color: value === "X" ? "#966fd6" : "#e0e0e0",
              }}
              className={`border-[#E0E0E0] border-2 rounded-3xl h-24 w-24 text-[#E0E0E0] font-extrabold text-4xl ${
                value ? "animate-fadeIn" : ""
              }`}
            >
              {value === "X" ? (
                <img src="./icons/X.svg" alt="X" />
              ) : value === "O" ? (
                <img src="./icons/O.svg" alt="O" />
              ) : (
                <></>
              )}
            </button>
          ))}
        </div>
        {(gameBlocked || winner != null) && (
          <div className=" absolute inset-0 h-full w-full bg-[#121212]/80 backdrop-blur-md rounded-3xl flex flex-col justify-center items-center">
            <h1 className="text-lg font-light text-center w-5/6">
              {winner == null
                ? "Wanna try?"
                : winner == "O"
                ? getRandomMessage()
                : "Another round maybe?"}
            </h1>
            <button
              onClick={startGame}
              className="text-[#e0e0e0] border-b-2 rounded-lg w-32 p-2 cursor-pointer"
            >
              give it a go!
            </button>
          </div>
        )}
      </div>
      <div className="h-4 w-[90%] flex flex-row justify-center"></div>
      <Dialog
        visible={modalVisible}
        modal
        onHide={() => {
          if (!modalVisible) return;
          setmodalVisible(false);
        }}
        content={({ hide }) => (
          <div>
            <div className="hidden lg:flex tictactoe-wining-dialog">
              <div className="">
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl font-bold mb-2 mt-10">
                    You've won!🎉
                  </h1>
                  <IoCloseOutline
                    color="#e0e0e0"
                    size={30}
                    className="opacity-50 cursor-pointer mt-8"
                    onClick={() => setmodalVisible(false)}
                  />
                </div>
                <h1 className="text-md font-light">
                  you can use this code to get a 30% discount for any{" "}
                  <span className="font-bold">projects</span> or
                  <span className="font-bold"> courses</span>!
                </h1>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-[90%] ">
                  <h1 className="text-md font-light">
                    just copy this code and sent it to me!
                  </h1>
                  <div className="flex flex-row w-full h-14 justify-between items-center">
                    <h1
                      ref={headingRef}
                      className="font-[Montserrat] select-none  text-2xl font-bold text-[#e0e0e0]/50"
                    >
                      {generateDiscountVoucher()}
                    </h1>
                    <IoCopyOutline
                      onClick={copyToClipboard}
                      color="#e0e0e0"
                      size={30}
                      className="opacity-50 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="h-[1px] bg-[#e0e0e0]/50 w-full"></div>
                <div className="w-[90%] h-20 flex flex-row justify-between items-center">
                  <h1 className="text-md font-light">Reach out to me at:</h1>
                  <div className="flex flex-row">
                    <a href="https://www.linkedin.com/in/mohammad-taheri-6b5ba0241">
                      <img
                        src="./icons/linkedinIcon.svg"
                        className="opacity-70 h-12 cursor-pointer"
                      />
                    </a>
                    <a href="https://t.me/Mhdtr99">
                      <img
                        src="./icons/telegramIcon.svg"
                        className="opacity-70 h-12 cursor-pointer"
                      />
                    </a>
                    <a href="mailto:mohammadtaheri.dev@gmail.com">
                      <img
                        src="./icons/gmailIcon.svg"
                        className="opacity-70 h-12 cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden tictactoe-wining-dialog-mobile">
              <div className="mx-4">
                <div className="flex flex-row justify-between">
                  <h1 className="text-2xl font-bold mb-2 mt-10">
                    You've won!🎉
                  </h1>
                  <IoCloseOutline
                    color="#e0e0e0"
                    size={30}
                    className="opacity-50 cursor-pointer mt-8"
                    onClick={() => setmodalVisible(false)}
                  />
                </div>
                <h1 className="text-md font-light ">
                  you can use this code to get a 30% discount for any{" "}
                  <span className="font-bold">projects</span> or
                  <span className="font-bold"> courses</span>!
                </h1>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-[90%]">
                  <h1 className="text-md font-light">
                    just copy this code and sent it to me!
                  </h1>
                  <div className="flex flex-row w-full h-14 justify-between items-center">
                    <h1
                      ref={headingRef}
                      className="font-[Montserrat] select-none  text-xl font-bold text-[#e0e0e0]/50"
                    >
                      {generateDiscountVoucher()}
                    </h1>
                    <IoCopyOutline
                      onClick={copyToClipboard}
                      color="#e0e0e0"
                      size={30}
                      className="opacity-50 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="h-[1px] bg-[#e0e0e0]/50 w-full"></div>
                <div className="w-[90%] h-20 flex flex-row justify-between items-center">
                  <h1 className="text-md font-light">Reach out to me at:</h1>
                  <div className="flex flex-row">
                    <a href="https://www.linkedin.com/in/mohammad-taheri-6b5ba0241">
                      <img
                        src="./icons/linkedinIcon.svg"
                        className="opacity-70 h-10 cursor-pointer"
                      />
                    </a>
                    <a href="https://t.me/Mhdtr99">
                      <img
                        src="./icons/telegramIcon.svg"
                        className="opacity-70 h-10 cursor-pointer"
                      />
                    </a>
                    <a href="mailto:mohammadtaheri.dev@gmail.com">
                      <img
                        src="./icons/gmailIcon.svg"
                        className="opacity-70 h-10 cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Dialog>
    </div>
  );
};

export default TicTacToe;
