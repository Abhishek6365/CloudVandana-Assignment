package mypackage;


import java.util.Arrays;
import java.util.Collections;
import java.util.List;
public class ShuffleArray
{

        public static void main(String[] args) {
            Integer[] myArray = {1, 2, 3, 4, 5, 6, 7};

            // Convert to a list for shuffling
            List<Integer> list = Arrays.asList(myArray);
            Collections.shuffle(list);

            // Convert back to an array
            myArray = list.toArray(new Integer[0]);

            System.out.println(Arrays.toString(myArray));
        }
    }


