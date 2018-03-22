import Data.List
import Control.Monad
{-
type Kp=(Int,Int)

mk::Kp->[Kp]
mk (c,r)=do
  (c',r')<-[(c+2,r+1),(c+2,r-1),(c-2,r+1),(c-2,r-1),(c+1,r+2),(c+1,r-2),(c-1,r+2),(c-1,r-2)]
  guard ( c' `elem` [1..8] && r' `elem` [1..8] )
  return (c',r')

in3::Kp->[Kp]
in3 s=return s >>= mk >>= mk >>= mk

can::Kp->Kp->Bool
can s e=e `elem` in3 s

main=print $ can (1,1) (2,3)
--main=print $ in3 (1,1)
-}

type Kp=(Int,Int,String)

mk::Kp->[Kp]
mk (c,r,s)=do
  (c',r',s')<-[(c+2,r+1,s++"C+2R+1"),
               (c+2,r-1,s++"C+2R-1"),
               (c-2,r+1,s++"C-2R+1"),
               (c-2,r-1,s++"C-2R-1"),
               (c+1,r+2,s++"C+1R+2"),
               (c+1,r-2,s++"C+1R-2"),
               (c-1,r+2,s++"C-1R+2"),
               (c-1,r-2,s++"C-1R-2")]
  guard ( c' `elem` [1..8] && r' `elem` [1..8] )
  return (c',r',s')

in3::Kp->[Kp]
in3 s=return s >>= mk >>= mk >>= mk

inm::Int->Kp->[Kp]
inm x s=return s >>= foldr (<=<) return (replicate x mk)

--can::Kp->Kp->[Kp]
can (sc,sr,ss) (ec,er,es)=do
--  (c,r,s)<-in3 (sc,sr,ss)
  (c,r,s)<-inm 3 (sc,sr,ss)
  guard (ec==c && er==r)
  return (c,r,s)




main=do
  print "_______________"
  print $ can (1,1,"") (2,3,"")
--  print $ in3 (1,1,"")
  print "_______________"


