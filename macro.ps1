#######################################
##ウィンドウを最前面、アクティブ用のおま
##ようわからん
add-type -AssemblyName microsoft.VisualBasic
add-type -AssemblyName System.Windows.Forms
Start-Sleep -m 500
#######################################
##省略関数
#タブ回し
function tb ($c){
for ($i = 0; $i -lt $c; $i++) {
[System.Windows.Forms.SendKeys]::SendWait("{TAB}") }
}
#####################
#逆タブ回し
function tbs ($c){
for ($i = 0; $i -lt $c; $i++) {
[System.Windows.Forms.SendKeys]::SendWait("+{TAB}") }
}
#####################
#スリープ（秒）、10で10秒
function slp ($i){ Start-Sleep -s $1 }
#####################
#スリープ（秒）、10000で10秒
function slpm ($i){ Start-Sleep -m $1 }
#####################
#エンター
function ent { [System.Windows.Forms.SendKeys]::SendWait("{ENTER}") }
#####################
#ウィンドウを最前面、アクティブに
function activeprocess ($p){

$ps = Get-Process | Where-Object {$_.Name -eq "sakura"}
foreach($process in $ps){
[Microsoft.VisualBasic.Interaction]::AppActivate($process.ID);
}
start-sleep -Milliseconds 500
}
#####################
#キー入力
function key ($k) { [System.Windows.Forms.SendKeys]::SendWait($k) }
#####################
#時間
function df($n=0){
return (get-date).adddays($n).ToString("yyyy/MM/dd")
}

#######################################
#tb...タブを引数の数だけ連発
#s...引数の秒を待ち
#ms...引数のマイクロ秒を待ち
#e...エンター
#activeprocess...タスクマネージャーから右クリックとかでプロセス名見れるからそれを最前面に
#k...[System.Windows.Forms.SendKeys]::SendWaitが長杉
#df...0で今日-3で三日前
#######################################
#######################################
#######################################
#######################################
#######################################
#######################################
<#
#######################################
キー	コード
BACKSPACE	{BACKSPACE}、{BS}、または {BKSP}
BREAK	{BREAK}
CAPS LOCK	{CAPSLOCK}
DEL or DELETE	{DELETE} または {DEL}
DOWN ARROW	{DOWN}
END	{END}
ENTER	{ENTER} または ~
ESC	{ESC}
HELP	{HELP}
HOME	{HOME}
INS or INSERT	{INSERT} または {INS}
LEFT ARROW	{LEFT}
NUM LOCK	{NUMLOCK}
PAGE DOWN	{PGDN}
PAGE UP	{PGUP}
PRINT SCREEN	{PRTSC}
RIGHT ARROW	{RIGHT}
SCROLL LOCK	{SCROLLLOCK}
TAB	{TAB}
UP ARROW	{UP}
F1	{F1}
F2	{F2}
F3	{F3}
F4	{F4}
F5	{F5}
F6	{F6}
F7	{F7}
F8	{F8}
F9	{F9}
F10	{F10}
F11	{F11}
F12	{F12}
F13	{F13}
F14	{F14}
F15	{F15}
F16	{F16}

通常のキーと Shift キー、Ctrl キー、または Alt キーとの
組み合わせを送信するには、キーの組み合わせを表現する文字列を
引数に指定します。これを行うには、通常のキーの前に
次の特殊文字を 1 つまたは複数個付加します。
キー	コード
SHIFT	+
CTRL	^
ALT	%

#例：コントロール＋キー
[System.Windows.Forms.SendKeys]::SendWait("^a")
#######################################
#######################################
#######################################
#######################################
#######################################
#tb...タブを引数の数だけ連発
#tbs...shift+タブを引数の数だけ連発
#slp...引数の秒を待ち
#slpm...引数のマイクロ秒を待ち
#ent...エンター
#actvvv...タスクマネージャーから見れる
#k...[System.Windows.Forms.SendKeys]::SendWaitが長杉
#######################################
#######################################
#>
#ここから本番処理スタート
#& "C:\Users\●●●\Desktop\psDir\無題1.txt"
#activeprocess "sakura"
slp 1
tbs 6
key "wwww"














