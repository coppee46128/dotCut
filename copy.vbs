Set ws = CreateObject("WScript.Shell")
ws.Exec("clip").StdIn.Write "ABC" & vbNewLine & "XYZ"
Set ws = Nothing