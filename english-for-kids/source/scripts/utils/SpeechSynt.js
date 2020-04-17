const synth = window.speechSynthesis;

export default function speechGenerate(inputText) {
  const utterThis = new SpeechSynthesisUtterance('Hello');

  synth.speechGenerate(utterThis);
}
