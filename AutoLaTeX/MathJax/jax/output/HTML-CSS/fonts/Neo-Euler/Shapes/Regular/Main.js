/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/Neo-Euler/Shapes/Regular/Main.js
 *  
 *  Copyright (c) 2013-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.OutputJax['HTML-CSS'].FONTDATA.FONTS['NeoEulerMathJax_Shapes'] = {
  directory: 'Shapes/Regular',
  family: 'NeoEulerMathJax_Shapes',
  testString: '\u00A0\u2B1A',
  0x20: [0,0,333,0,0],
  0xA0: [0,0,333,0,0],
  0x2B1A: [690,6,816,60,756]
};

MathJax.Callback.Queue(
  ["initFont",MathJax.OutputJax["HTML-CSS"],"NeoEulerMathJax_Shapes"],
  ["loadComplete",MathJax.Ajax,MathJax.OutputJax["HTML-CSS"].fontDir+"/Shapes/Regular/Main.js"]
);
