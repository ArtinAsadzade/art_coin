import React, { useCallback, useState } from "react";
import { formatNumber, nameTranslator } from "../../../utils";

export default function AccountInfo({ user }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(user.inviteLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  }, [user.inviteLink]);

  return (
    <div className="w-full bg-secondary p-2 relative my-20 rounded-[10px] select-none">
      <img
        className="w-[85px] h-[85px] rounded-full absolute -top-11 left-1/2 -translate-x-1/2 border-[4px] border-secondary border-b-primary"
        src={user.profile ? user.profile : "/default_profile.jpg"}
        alt="profile"
      />
      <div className="w-full my-[35px] flex flex-col text-center items-center gap-4 font-bold">
        <h2 className="text-xl text-primary">{nameTranslator(user.email)}</h2>
        <div className="w-full flex flex-col gap-4 text-sm font-bold text-secondary">
          <div className="flex justify-between gap-4">
            <div className="bg-primary rounded-[5px] w-1/2">
              <p>Per Tap</p>
              {formatNumber(user.perTap)}
            </div>
            <div className="bg-primary rounded-[5px] w-1/2">
              <p>Coin Limit</p>
              {formatNumber(user.coinLimit)}
            </div>
          </div>
          <div className="bg-primary rounded-[5px] w-full">
            <p>All Coins</p>
            {formatNumber(user.coins)}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 text-sm font-bold text-secondary">
          <div className="flex justify-between gap-4">
            <div className="bg-primary rounded-[5px] w-1/2">
              <p>Join Date</p>
              {formatNumber(user.perTap)}
            </div>
            <div className="bg-primary rounded-[5px] w-1/2">
              <p>Invited Friends</p>
              {formatNumber(user.invitedUsers.length)}
            </div>
          </div>
          <div className="w-full flex justify-between gap-4">
            {user.inviter && (
              <div className="bg-primary rounded-[5px] w-full">
                <p>You Invited By</p>
                {/* {nameTranslator(user.inviter)} */}
              </div>
            )}
            {user.name && (
              <div className="bg-primary rounded-[5px] w-full">
                <p>Your Name</p>
                {user.name}
              </div>
            )}
          </div>
          <div>
            <p className="text-primary text-left">Invite Link :</p>
            <div className="relative bg-primary rounded-[5px] w-full p-1">
              <p className="line-clamp-2">{user.inviteLink}</p>
              <div
                className={`absolute inset-0 flex items-center justify-center text-white text-lg font-bold transition-opacity duration-300 ${
                  copied ? "opacity-0" : "opacity-100"
                } bg-primary bg-opacity-90 rounded-[5px]`}
              >
                <button onClick={handleCopy} className="w-full text-secondary rounded">
                  {copied ? "COPIED!" : "COPY"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
