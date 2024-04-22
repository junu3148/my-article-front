//import { getKeywords } from "@/app/api/keyword/getKeywords";
"user client";
import { Chip } from "@nextui-org/react";

function ManagedKeyword() {
  //const { keywords } = await getKeywords();
  const keywords = ["Node.js", "nestjs", "react", "crawler"];
  return (
    <div className="py-4 font-semibold text-gray-800 px-4">
      <div className="text-lg mb-3 ">등록된 키워드</div>
      <div className="flex gap-x-2">
        {keywords.map((keyword) => (
          //<div key={keyword.keyword}>{keyword.keyword}</div>
          <Chip key={keyword}>{keyword}</Chip>
        ))}
      </div>
    </div>
  );
}

export default ManagedKeyword;
