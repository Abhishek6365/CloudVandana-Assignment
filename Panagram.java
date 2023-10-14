package mypackage;

public class Panagram
{
        public static void main(String[] args) {
            String inputSentence = "The quick brown fox jumps over the lazy dog";
            if (isPangram(inputSentence)) {
                System.out.println("The input is a pangram.");
            } else {
                System.out.println("The input is not a pangram.");
            }
        }

        public static boolean isPangram(String s) {
            s = s.toLowerCase();
            for (char c = 'a'; c <= 'z'; c++) {
                if (s.indexOf(c) == -1) {
                    return false;
                }
            }
            return true;
        }
    }
