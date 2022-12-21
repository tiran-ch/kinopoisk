
export const toggleValue =(setToggleValue, setFooter, setFooterBlock)=>{
  if (setToggleValue === true){
    setFooter("footerLight");
    setFooterBlock("footerBlockLight");
  }else {
    setFooter("black");
    setFooterBlock("footer-block")
  }
};

export const numCreateArray =(page, pageCount)=>{
  if (pageCount !== ""){
    for (let i = 0; i < pageCount; i++){
      page.push(i + 1)
    }
  }
};