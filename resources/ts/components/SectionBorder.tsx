import React from "react";

function SectionBorder() {
  return (
    <div>
        {/* line divider */}
        <div className="hidden sm:block">
          <div className="py-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
    </div>
  );
}

export default SectionBorder;
