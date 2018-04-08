str="abcd123#"
cmd = "cmd /c ""echo " & str & "| clip"""
CreateObject("WScript.Shell").Run cmd, 0


