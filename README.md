# sefeg.github.io
This is my personal website (www.sebastian-feger.com). The website is based on a custom-designed layout and contains the following information:

- **Research:** Overview of my research with pointers to key publications.
- **Open Data:** A list of open data (and descriptions) that I made available.
- **Publications:** References my Google scholar and ORCiD profiles. Further provides open access links to all my first-author ACM publications.
- **Contact:** Details my communication channels.

### Pre-processing

[Gulp file-include](https://www.npmjs.com/package/gulp-file-include) is used to pre-process include instructions for the common files (header, profile-overview). Source files with pre-process instructions are located in **/src**.

Run *gulp fileinclude* to pre-process the source pages in the **/src** folder. The output is located in the root.
