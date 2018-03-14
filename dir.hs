
import System.Directory
import Control.Monad (mapM_, filterM, liftM)


--path cut
pc::String -> String -> String
pc "" a = reverse a
pc ('/':xs) a = pc xs ""
pc (x:xs) a = pc xs (x:a)
--
pc'::String -> Bool
pc' "" = False
pc' "." = False
pc' ".." = False
pc' ('.':xs) = False
pc' (x:xs) = True

pc'' a 1 = print a
pc'' a 2 = removeFile a 

--file read
fr::String -> IO ()
fr a = do
  p <- getDirectoryContents a
  let l = map (\x -> a ++ x) p
  f <- filterM doesFileExist l
  mapM_ (\x -> pc'' x 1) $ filter (\x -> not . pc' $ pc x "") f
  d <- filterM doesDirectoryExist l
  mapM_ (\x -> fr (x ++"/")) $ filter (\x -> pc' $ pc x "") d


main = do
  c <- getCurrentDirectory
  --print c
  fr $ c ++ "/"


