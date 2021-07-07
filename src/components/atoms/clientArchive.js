import React from "react";
import { ArchiveCardOnline } from "./archiveCardOnline";
import { ArchiveCardOffline } from "./archiveCardOffline";

export const ClientArchive = () => {
  return (
    <div className="   ">
      <div>
        <ArchiveCardOffline
          clientName=" ابتسام البسيوني"
          date="الحد 12مارس الساعه 10:30ص"
          offline=" الحضور بالعياده"
          mobile="01278023989"
        />
      </div>
      <div className=" mt-3">
        <ArchiveCardOnline
          clientName=" ابتسام البسيوني"
          date="الحد 12مارس الساعه 10:30ص"
          online=" الحضور اونلاين"
          mobile="01278023989"
        />
      </div>
    </div>
  );
};
