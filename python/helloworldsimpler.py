# this is also python 2! it uses a os attributer to use write
getattr(__import__("os"), "write")(1, "Hello world!\n")