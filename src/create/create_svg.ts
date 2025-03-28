function createSvgElement(): SVGSVGElement {
  const parser: DOMParser = new DOMParser();
  const svgString: string = `<svg data-name="Слой 1" id="Слой_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#cacaca;}.cls-2{fill:#919396;}.cls-3{fill:currentcolor;}.cls-4{fill:#ff1d25;}.cls-5{fill:#414042;}.cls-6{fill:#231f20;}.cls-7{fill:#faec21;}</style></defs><title></title><path class="cls-1" d="M105.08,236.51l-.25-13.25L131,194.94s6.1-8.73,10.43-8.73a5.8,5.8,0,0,1,5.59,3.31L112.2,225.06,114,235.61Z"></path><path class="cls-1" d="M144,235.61s1.78-21.09,1.78-23.8,1.27-22.89,5.84-24.1,11.19,5.42,11.19,5.42l-.76,8.14s-4.83-6-6.1-6-3.31,12-3.31,13.26-2.54,19.27-2.54,19.27l2.8,7.84Z"></path><circle class="cls-2" cx="115.52" cy="328.99" r="12.31"></circle><circle class="cls-2" cx="414.33" cy="328.99" r="12.31"></circle><path class="cls-3" d="M9.07,240H161.6l8.13,91.57s-9.15-1.21-11.18,0,0-51.81-47.8-51.81S71.1,331.58,71.1,331.58h-3l-12.21-4.82-35.59-6s-3.05,1.21-7.11-8.43a75,75,0,0,1-5.09-18.08,54.21,54.21,0,0,1-2-6C5,284.59,6,275,6,272.54s1-3.62,0-4.82-2-4.82-1-9.64,2-6,2-6Z"></path><path class="cls-4" d="M13.92,251.47,10.21,249l-.19,1.1s-1,1.21-2,6,0,8.43,1,9.64,0,2.41,0,4.82S8,282.6,9,286.21a56.08,56.08,0,0,0,2,6s.19,1.57.73,4.14l4.86-3.14S20,277.17,20.7,263.52,13.92,251.47,13.92,251.47Z"></path><path class="cls-3" d="M494.08,308.89c-1-2.41,0-19.27-1-24.09s1-12.05-1-14.46S489,252.26,487,249.85s-3.05-10.84-43.73-18.07-63-4.82-68.13-7.23-45.76-39.76-71.18-45.78-80.33-4.82-97.61-3.62-29.49,0-35.59,6-7.12,15.66-8.14,26.5,9.15,122.9,9.15,122.9l86.43-1.2,106.77,1.2s4.07,0,6.1-6,3.06-48.2,42.71-49.4,41.69,32.53,42.71,37.35-1,19.28,3.05,18.07,14.24-7.23,18.3-7.23,8.14,1.21,11.19-2.41S495.1,311.3,494.08,308.89ZM250.55,236c-2,1.2-51.86-2.11-51.86-2.11s-8.14-.9-10.42-5.12c0,0-3.31-1.81-4.07-11.15s-1.78-25.6,1-28.61a8,8,0,0,1,6.1-2.71l52.62-2.41s4.32-1.21,5.34,2.11,3.56,45.78,3.56,45.78S252.58,234.79,250.55,236Zm99.9.9s-77.28-.3-80.58-.6a3.3,3.3,0,0,1-3.05-3.61l-6.1-42.48a15.25,15.25,0,0,1,.25-4.51c.51-2.11,3-1.81,3-1.81s4.32.3,17.54.9,24.15,3,38.9,10.54,38.38,30.43,38.64,36.45S350.45,236.9,350.45,236.9Z"></path><path class="cls-5" d="M115.81,290.82A38.16,38.16,0,1,0,154,329,38.15,38.15,0,0,0,115.81,290.82Zm-.24,64.32A26.17,26.17,0,1,1,141.74,329,26.16,26.16,0,0,1,115.57,355.14Z"></path><path class="cls-5" d="M414.62,290.82A38.16,38.16,0,1,0,452.77,329,38.15,38.15,0,0,0,414.62,290.82Zm-.25,64.32A26.17,26.17,0,1,1,440.54,329,26.16,26.16,0,0,1,414.37,355.14Z"></path><path class="cls-6" d="M177.36,331.32l-1.86-.25c-4.67-.61-9.35-.7-10.22-.19a1.64,1.64,0,0,1-1.52.07c-1-.48-1.17-1.44-1.73-5-7.28-46.66-35.9-46.66-45.31-46.66-12.87,0-22.71,3.87-29.25,11.51-12.49,14.59-9,38.33-8.92,38.56l.27,1.73H73.73l-12.32-4.87-35.13-6c-1.46.24-4.78-.43-8.56-9.38a76.47,76.47,0,0,1-5.16-18.27,57.93,57.93,0,0,1-2-6c-.82-2.94-.45-9.06-.2-13.11.08-1.28.15-2.39.15-3a13,13,0,0,1,.3-2.6c.2-1,.18-1.11.05-1.26-1.4-1.66-2.42-5.78-1.34-10.91a20.91,20.91,0,0,1,2.08-6.28l2.19-13H168.94ZM74.3,328.09h1.07c-.63-6-1.69-25.79,9.81-39.24,7.13-8.34,17.75-12.57,31.54-12.57,40.6,0,46.38,37,48.28,49.2.13.82.26,1.66.37,2.29a37,37,0,0,1,8.67.11l-7.85-88.36H16.31l-1.89,11.2-.27.31h0s-.84,1.24-1.71,5.37c-.95,4.51.08,7.63.69,8.36a4,4,0,0,1,.6,3.78,9.89,9.89,0,0,0-.24,2c0,.66-.07,1.76-.16,3.15-.22,3.61-.59,9.66.1,12.1a56.71,56.71,0,0,0,2,5.85l.08.2,0,.2a74.24,74.24,0,0,0,5,17.68c2.89,6.85,5,7.5,5.34,7.56l.23-.1,36.3,6.18Z"></path><path class="cls-6" d="M464,331.16a2.72,2.72,0,0,1-1.62-.54c-2-1.49-2.14-5.53-2.14-12a43.25,43.25,0,0,0-.3-6.79c-.08-.38-.17-.93-.28-1.63-.61-3.87-2-12.94-7.68-20.72-7-9.62-18.18-14.26-33.24-13.81-33,1-38.18,31-40.39,43.85a35.1,35.1,0,0,1-.94,4.53c-2.35,7-7.31,7-7.52,7l-106.77-1.21-87.8,1.23-.13-1.39c-.41-4.58-10.17-112.31-9.15-123.17,1-10.28,2-20.9,8.58-27.44,5.12-5.06,13.7-5.41,25.58-5.89,3.46-.14,7-.29,11-.56,16.37-1.14,72.29-2.46,98.06,3.65,19.3,4.58,47,26.69,61.86,38.58,4.55,3.63,8.49,6.78,9.62,7.31,1.7.81,6.55,1,13.26,1.33a389.29,389.29,0,0,1,54.49,5.78c37,6.57,41.77,14.15,44.06,17.78a7.51,7.51,0,0,0,.55.8c1.22,1.45,1.88,5.11,2.87,11,.58,3.44,1.46,8.63,2.21,9.53,1.54,1.81,1.37,4.89,1.19,8.45a28,28,0,0,0,.15,6.66c.54,2.56.54,8,.54,13.26,0,4.05,0,9.59.39,10.57,1.4,3.31-2.35,10.07-5.32,13.6s-6.66,3.23-10,3c-.79,0-1.59-.09-2.37-.09-2.18,0-7.09,2.33-11,4.21a57,57,0,0,1-6.84,2.95A3,3,0,0,1,464,331.16Zm-43.18-58.53c23.89,0,37.95,12.47,41.8,37.1.1.63.18,1.13.25,1.47a42.56,42.56,0,0,1,.37,7.41c0,3,0,8.43.85,9.52a58.44,58.44,0,0,0,6.34-2.77c4.66-2.21,9.47-4.5,12.33-4.5.87,0,1.72.05,2.54.1,3.44.2,5.64.22,7.5-2,3.27-3.88,5.44-9.1,4.85-10.5s-.63-5.19-.63-11.73c0-4.87,0-10.38-.48-12.64a30,30,0,0,1-.21-7.43c.14-2.56.29-5.46-.48-6.37-1.22-1.44-1.89-5.1-2.88-11-.58-3.43-1.45-8.63-2.21-9.52a10.76,10.76,0,0,1-.78-1.14c-1.91-3-6.37-10.08-42.06-16.43a386.12,386.12,0,0,0-54.1-5.73c-7.58-.34-12.16-.55-14.41-1.62-1.38-.65-4.29-2.95-10.2-7.68-14.69-11.74-42-33.58-60.68-38-25.44-6-80.91-4.71-97.17-3.58-3.95.28-7.72.43-11,.57-11.2.45-19.3.78-23.6,5-5.83,5.76-6.74,15.39-7.69,25.58-.93,9.94,7.86,108.34,9,121.24l85.08-1.19,106.76,1.21c.08,0,3-.18,4.67-5a36.32,36.32,0,0,0,.82-4.08c2.14-12.38,7.81-45.26,43.26-46.34Z"></path><path class="cls-6" d="M119.79,367.63A39.65,39.65,0,1,1,159.45,328,39.7,39.7,0,0,1,119.79,367.63Zm0-76.3A36.65,36.65,0,1,0,156.45,328,36.69,36.69,0,0,0,119.79,291.33Zm-.24,64.32A27.67,27.67,0,1,1,147.22,328,27.7,27.7,0,0,1,119.55,355.65Zm0-52.34A24.67,24.67,0,1,0,144.22,328,24.7,24.7,0,0,0,119.55,303.31Z"></path><path class="cls-6" d="M61.08,323.59a89.41,89.41,0,0,1,6.43-32.27c6.17-14.94,19.62-32.92,48.66-33.72s43.82,16.66,51.12,31.45a93.4,93.4,0,0,1,8.89,32.31l-3,.18a92.11,92.11,0,0,0-8.63-31.24C154.51,270,138.27,260,116.25,260.6s-37.44,11.3-45.93,31.79a88,88,0,0,0-6.24,31.15Z"></path><path class="cls-6" d="M108.64,238.17l-.29-15.49L134.87,194c.91-1.29,6.76-9.29,11.6-9.29a7.28,7.28,0,0,1,7,4.27l.34.9-35,35.69,1.92,11.37Zm2.73-14.34.21,11,5.68-.57-1.64-9.72,34.56-35.27a4.54,4.54,0,0,0-3.71-1.58c-2.44,0-6.85,4.73-9.2,8.09l-.13.16Z"></path><path class="cls-6" d="M160,237.11H147.38l.13-1.63c.62-7.27,1.78-21.58,1.78-23.67,0-.24.63-23.88,7-25.55,5.26-1.38,11.89,5.07,12.63,5.82l.5.49L168.2,205.1l-2.31-2.89a48.26,48.26,0,0,0-4.47-4.94,73,73,0,0,0-2.27,11.23c0,1.2-2,15.39-2.5,19.12Zm-9.39-3h5.14l-2.21-6.18.05-.36c1-6.86,2.51-18.1,2.53-19.08a65,65,0,0,1,1.21-7.38c1.33-6.3,2.18-7.37,3.6-7.37.49,0,1.54,0,4.94,3.82l.36-3.84c-2-1.81-6.47-5.29-9.24-4.56-.08,0-2,.63-3.54,10.27a100.87,100.87,0,0,0-1.19,12.38C152.29,214.13,151.06,229.07,150.64,234.11Zm10-37.42Z"></path><path class="cls-6" d="M250.55,236.71c-9.69,0-29.71-1.17-47-2.32-.95-.1-8.69-1.09-11.45-5.58-1.08-.85-3.75-3.77-4.43-12.06-1.88-23-.23-28,1.41-29.76a9.57,9.57,0,0,1,7.21-3.19l52.39-2.4c2-.5,5.88-.46,7,3.16,1,3.39,3.36,41.77,3.62,46.14v.21c0,.39-.4,3.83-3,5.38C255.79,236.59,253.73,236.71,250.55,236.71ZM196,186.79a6.63,6.63,0,0,0-4.72,2.24c-.79.86-2.44,5.24-.62,27.48.66,8.14,3.31,10,3.34,10l.39.21.16.36c1.56,2.88,7.22,4.11,9.27,4.34,18.16,1.21,47.9,2.87,51,2.24a4.57,4.57,0,0,0,1.44-2.9c-1-17-2.79-43-3.49-45.3-.59-1.89-3.48-1.11-3.5-1.1l-.34,0-52.72,2.42H196Zm59,46.83Z"></path><path class="cls-6" d="M195.15,258.19c-4,0-7.22-3.71-7.22-8.28s3.24-8.27,7.22-8.27,7.22,3.71,7.22,8.27S199.13,258.19,195.15,258.19Zm0-13.55c-2.33,0-4.22,2.36-4.22,5.27s1.89,5.28,4.22,5.28,4.22-2.37,4.22-5.28S197.47,244.64,195.15,244.64Z"></path><path class="cls-6" d="M282.21,258.19c-3.91,0-7.09-3.64-7.09-8.13s3.18-8.12,7.09-8.12,7.1,3.64,7.1,8.12S286.13,258.19,282.21,258.19Zm0-13.25c-2.25,0-4.09,2.3-4.09,5.12s1.84,5.13,4.09,5.13,4.1-2.3,4.1-5.13S284.47,244.94,282.21,244.94Z"></path><path class="cls-6" d="M356.68,237.46c-.63,0-1.11,0-1.33-.05-4,0-77.33-.31-80.64-.61a4.73,4.73,0,0,1-4.42-5l-6.09-42.38a16.75,16.75,0,0,1,.29-5c.65-2.69,3.34-3.11,4.68-2.95h0s4.48.31,17.44.9c12.22.55,23.62,2.59,39.5,10.7,13.67,7,39.15,30.32,39.46,37.72a5.66,5.66,0,0,1-1.73,4.52C361.8,237.16,358.56,237.46,356.68,237.46ZM267.18,189l6.12,42.6v.17a1.75,1.75,0,0,0,1.69,2c2.56.23,53.75.49,80.45.6h.15c1.2.11,4.65.1,6.2-1.37a2.66,2.66,0,0,0,.79-2.2c-.2-4.83-22.66-27.43-37.82-35.17-15.41-7.87-26.45-9.85-38.28-10.39-13.09-.59-17.53-.9-17.58-.9s-1.3-.1-1.49.66A14.16,14.16,0,0,0,267.18,189Z"></path><path class="cls-6" d="M203.94,252.77H184.32a3,3,0,0,1-3-3v-.62a3,3,0,0,1,3-3h19.62a3,3,0,0,1,3,3v.62A3,3,0,0,1,203.94,252.77Zm0-3v0Zm-19.62-.62v.62h19.62v-.62Z"></path><path class="cls-7" d="M450.05,252.47S461,263,462.25,263.62s.26,2.11,6.1,3,19.07,1.21,19.07,1.21-3.31-14.46-6.1-16.57-1.27-6.63-15.76-5.42l-14.49,1.2s-4.33-.3-4.33,1.21S450.05,252.47,450.05,252.47Z"></path><path class="cls-6" d="M290.51,253.37H271.12a3.37,3.37,0,0,1-3.37-3.37v-.77a3.38,3.38,0,0,1,3.37-3.38h19.39a3.38,3.38,0,0,1,3.37,3.38V250A3.37,3.37,0,0,1,290.51,253.37Zm-19.39-4.52a.38.38,0,0,0-.37.38V250a.38.38,0,0,0,.37.37h19.39a.38.38,0,0,0,.37-.37v-.77a.38.38,0,0,0-.37-.38Z"></path><path class="cls-6" d="M477.67,323.72l-3-.32c0-.29,2.93-28.9-13-48-8.54-10.24-21-16-36.94-17.17-17.1-1.24-39.81,1.45-50.84,21.3A45,45,0,0,0,368.37,299c.29,1.49,2.12,12-1.63,17.25a7.12,7.12,0,0,1-5,3.05c-8.84,1.19-141.11,2.07-148.28,2.12a63.92,63.92,0,0,1-11.43.67c-8.41-.32-13.55-2.69-15.26-7-3.54-9-8.21-35.52-9.25-52.57-1-16.9-.51-58.67-.26-64.62l.06-1.49c.19-5.42.36-10.09,5.25-13,5.2-3.08,35-5.33,46-5.33,12.5,0,49.72.62,57.25.9,10.26.4,33.1,3.67,46.08,13.25,15,11.1,25.91,19.18,28.69,22.17,2.59,2.8,9.15,11.31,9.77,14.27l0,.2L373.78,274c7.5-10.56,22.26-20.93,51.16-18.84,16.82,1.21,30,7.36,39,18.26C480.75,293.59,477.8,322.5,477.67,323.72ZM228.58,181.08c-12.66,0-40.46,2.52-44.49,4.91-3.33,2-3.58,5-3.78,10.52l-.06,1.51c-.24,5.72-.76,47.86.25,64.3,1,16.83,5.6,42.89,9.05,51.66,2.56,6.48,17.85,5.44,23.53,4.49l.23,0c1.4,0,139.32-.92,148-2.1a4.14,4.14,0,0,0,3-1.81c2.67-3.75,1.7-12.15,1.11-15.08l0-.29A47.16,47.16,0,0,1,371.25,278q.4-.72.84-1.44l-1.13.08-3.55-47.47c-.52-2-5.9-9.41-9-12.77-2.8-3-16.33-13-28.27-21.8-5.42-4-21.67-11.79-44.41-12.66C278.2,181.69,241.05,181.08,228.58,181.08Z"></path><path class="cls-6" d="M265.4,318.92l-3-.36c.05-.36,4.28-36.4,2-70.2s-6.06-67.37-6.1-67.71l3-.34c0,.34,3.85,33.87,6.11,67.85S265.45,318.56,265.4,318.92Z"></path><path class="cls-6" d="M494.34,269.38l-1.92,0c-.55,0-13.39-.32-19.27-1.23-4.42-.68-5.53-1.77-6.34-2.91a2.07,2.07,0,0,0-.18-.23c-1.29-.61-8.39-7.37-12.55-11.38-1.18-1-3.81-3.36-3.81-5.33a2.27,2.27,0,0,1,.74-1.66c1.23-1.14,3.87-1.12,5.07-1l14.38-1.2c11.12-.92,13.66,1.42,15.64,4.34a5.43,5.43,0,0,0,1.15,1.38c3,2.26,5.86,13.92,6.66,17.43Zm-40.86-20.71a14.81,14.81,0,0,0,2.55,2.64l.09.08c5.12,4.94,10.95,10.37,11.85,10.9a3.2,3.2,0,0,1,1.28,1.16c.32.46.82,1.15,4.36,1.7,4.36.67,13.05,1,16.93,1.13-1.55-6.22-3.77-12.82-5.1-13.81a8.5,8.5,0,0,1-1.83-2.1c-1.23-1.82-2.61-3.88-12.9-3l-14.6,1.22H456A10.89,10.89,0,0,0,453.48,248.67Z"></path><path class="cls-6" d="M469.11,245.47c-.25-.08-25.42-8.11-37.1-9.58s-44.19-6.28-44.52-6.33l.44-3c.33,0,32.66,4.84,44.46,6.32s36.59,9.37,37.64,9.7Z"></path><path class="cls-6" d="M373,230.86a23,23,0,0,1-4.39-.41l.58-2.94a25.34,25.34,0,0,0,10.77-.58c2.25-.6,10.82-3,10.91-3l.8,2.89c-.35.1-8.67,2.42-10.95,3A31.39,31.39,0,0,1,373,230.86Z"></path><path class="cls-6" d="M170.73,340.44l-.4-6.61,8-4.24,192-1.52-1.48,9.63Zm2.71-4.86.11,1.82,192.79-2.67.56-3.63-187.77,1.49Z"></path><path class="cls-6" d="M463.9,338.66,466,328.5l1.1-.11c7.84-.74,29.16-3.15,33.55-5.27,2.68-1.3,2.12-4.6,1.19-8.45a8.83,8.83,0,0,1-.47-3.81c.3-1.64-.55-18.26-1.21-29.35l-3.75.32.67-12.67,1.31-.11a44.29,44.29,0,0,1,6.89,0c3.2.34,4.27,3.61,4.39,5.3,0,.36.51,28.16.76,35.6.26,7.65-1.26,14.31-4.53,19.79-2.94,4.94-6.11,5.69-9.77,6.56-.57.14-1.18.28-1.81.45-4.69,1.24-27.59,1.83-28.57,1.86Zm4.62-7.39-.9,4.29c7.55-.22,22.67-.83,26-1.7l1.89-.47c3.49-.82,5.59-1.32,7.88-5.17,3-5,4.35-11.09,4.11-18.16-.25-7.45-.75-35.24-.76-35.57h0s-.23-2.29-1.71-2.45a35.67,35.67,0,0,0-5-.07l-.35,6.58,3.37-.29.1,1.53c.42,6.91,1.75,29.61,1.23,31.77a13.43,13.43,0,0,0,.46,2.4c.85,3.52,2.28,9.4-2.79,11.86S473.91,330.74,468.52,331.27Z"></path><path class="cls-6" d="M13.74,298.82l-.45-2.13c-.45-2.1-.66-3.55-.73-4.07a57.93,57.93,0,0,1-2-6c-.82-2.94-.45-9.06-.2-13.11.08-1.28.15-2.39.15-3a13,13,0,0,1,.3-2.6c.2-1,.18-1.11.05-1.26-1.4-1.66-2.42-5.78-1.34-10.91a20.91,20.91,0,0,1,2.08-6.28l.52-3.09,5.18,3.51a6.54,6.54,0,0,1,4.53,1.54c2.53,2.15,3.66,6.23,3.37,12.13-.68,13.62-4.06,29.8-4.1,30l-.13.61ZM14,251.31a21.26,21.26,0,0,0-1.56,5.09c-.95,4.51.08,7.63.69,8.36a4,4,0,0,1,.6,3.78,9.89,9.89,0,0,0-.24,2c0,.66-.07,1.76-.16,3.15-.22,3.61-.59,9.66.1,12.1a56.71,56.71,0,0,0,2,5.85l.08.19,0,.21s.08.69.29,1.87l2.47-1.6a221,221,0,0,0,3.91-28.88c.3-6.07-1.07-8.6-2.27-9.66a3.45,3.45,0,0,0-2.71-.84l-.61.11-.53-.34Z"></path><path class="cls-6" d="M418.6,367.63A39.65,39.65,0,1,1,458.25,328,39.69,39.69,0,0,1,418.6,367.63Zm0-76.3A36.65,36.65,0,1,0,455.25,328,36.69,36.69,0,0,0,418.6,291.33Zm-.25,64.32A27.67,27.67,0,1,1,446,328,27.7,27.7,0,0,1,418.35,355.65Zm0-52.34A24.67,24.67,0,1,0,443,328,24.7,24.7,0,0,0,418.35,303.31Z"></path><path class="cls-6" d="M119.55,341.79A13.81,13.81,0,1,1,133.36,328,13.83,13.83,0,0,1,119.55,341.79Zm0-24.62A10.81,10.81,0,1,0,130.36,328,10.82,10.82,0,0,0,119.55,317.17Z"></path><path class="cls-6" d="M418.35,341.79A13.81,13.81,0,1,1,432.17,328,13.83,13.83,0,0,1,418.35,341.79Zm0-24.62A10.81,10.81,0,1,0,429.17,328,10.82,10.82,0,0,0,418.35,317.17Z"></path><path class="cls-6" d="M242,272.24a508.8,508.8,0,0,1-59.55-3.81l.4-3c.37,0,37.1,4.93,72.37,3.53,35.43-1.4,111.7-2.12,112.47-2.13l0,3c-.77,0-77,.72-112.38,2.13C250.91,272.16,246.44,272.24,242,272.24Z"></path></svg>`;

  const svgDoc: Document = parser.parseFromString(svgString, 'image/svg+xml');
  const svgElement: HTMLElement = svgDoc.documentElement;

  if (svgElement instanceof SVGSVGElement) {
    return svgElement;
  } else {
    throw new Error('Failed to parse SVG string.');
  }
}

export default createSvgElement;
