const DesignCircle = () => {
  return (
    <div className="fixed left-[40px] top-[12%] -translate-y-1/2 z-30 flex flex-col items-center">
      {/* Outer Circle with Rotating Text */}
      <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-white/20">
        {/* Rotating Text Around the Circle */}
        <div className="absolute w-full h-full animate-spin-slow">
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <path
        id="circlePath"
        d="M 50,50
           m -40,0
           a 40,40 0 1,1 80,0
           a 40,40 0 1,1 -80,0"
      />
    </defs>

    <text fill="white" className="text-[10px] uppercase tracking-wide">
      <textPath xlinkHref="#circlePath" startOffset="35%" textAnchor="middle">
        Gleamy
      </textPath>
    </text>

    <text fill="white" className="text-[10px] uppercase tracking-wide">
      <textPath xlinkHref="#circlePath" startOffset="85%" textAnchor="middle">
        Creation
      </textPath>
    </text>
  </svg>
</div>


        {/* Inner Circle with 'g' and Small Letters */}
        <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full">
         

          {/* Main 'g' */}
          <span className="text-3xl text-black font-bold">g</span>

      
         
        </div>
      </div>
    </div>
  );
};

export default DesignCircle;
