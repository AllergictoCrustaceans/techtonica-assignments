function whoGoing(str1, str2, str3) {
    var finalList = [];
      if(str1 === 'David' || str2 === 'David' || str3 === 'David') {
          finalList.push('David', 'Alex', 'Breanna');
      }
      
      else{
          finalList.push('Priya', 'Ming', 'Breanna');
      }
    console.log(finalList);
}

whoGoing('Priya', 'David', 'Alex');
whoGoing('Priya', 'David', 'Ming');
whoGoing('Priya', 'Breanna', 'Alex');
whoGoing('Priya', 'Breanna', 'Ming');
whoGoing('Breanna', 'Alex', 'Ming');
whoGoing('David', 'Breanna', 'Alex');
whoGoing('David', 'Alex', 'Ming');
whoGoing('Alex', 'Ming', 'Priya');
whoGoing('David', 'Breanna', 'Ming');
whoGoing('Priya', 'David', 'Breanna');
