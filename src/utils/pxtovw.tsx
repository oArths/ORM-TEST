

const px2vw = (size : number, width : number = 1440) => `${(size / width) * 135}vw`;

export default px2vw;