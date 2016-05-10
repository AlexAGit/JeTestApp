1. How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

> I think I've spent more than 3 hours unfortunately. I'm usually a full stack .NET developer but I enjoy a lot working on web. I could have easily done it through web requests in c# but it would not have been as challenging. So instead I went for an html version. I've also used http://logicify.github.io/jquery-locationpicker-plugin/ a plugin I just found for using google maps in jquery. Because I haven't used it before and also because I've used https://github.com/wenzhixin/bootstrap-table-examples , a bootstrap table plugin , I had to fight some issues with the javascript. In the end it all went well but I would still improve some things. I believe the class needs more extensability and it's still not ready to be used as a standalone control. With a bit of refactoring or usage of angularjs or react it might get there in a better state.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

> I don't think it's that new but it's very useful: Parallel.Foreach

            var stepCount = 0;
            Parallel.ForEach(_measuresToCalculate, currentMeasure =>
            {                
                Guid userIdForCurrentMeasure = userId ?? currentMeasure.MeasureCreatorUserId;                

                var thisCount = Interlocked.Increment(ref stepCount);
                calculationProgressUpdates.Message(string.Format("{0}%", thisCount * 100 / (totalNumberOfMeasuresToCalculate == 0 ? 1 : totalNumberOfMeasuresToCalculate)));                
            }

3. How would you track down a performance issue in production? Have you ever had to do this?

> If it's on the production server we can first try to have a look at the resources and see what processes are using the most processor time/memory. Sometimes it can be the database in which case we must watch out for long running queries or locks. Depending on the platform some performance indicators can be set in place. 
The last time I had to check for performance issues it was in a specific part of the application with known performance issues(the page takes too long to load) and it was solved through parallel processing. 

4. How would you improve the JUST EAT APIs that you just used?
> I noticed that the Restaurants method sometimes returns a lot of results and there is no way to request only the top n results. Or maybe the option of splitting the results or getting the results grouped by different criteria in different requests.

5. Please describe yourself using JSON.

> [{
  "firstName": "Ionut",
  "middleName": "Alexandru",
  "lastName": "Achim",
  "basics": [
	"coding enthusiast",
	"team player",
	"quick thinker",
        "always up for a challenge"
  ],
  "fuelledBy": [
	"music",
	"tea",
	"croissants",
	"red wine",
	"stinky cheese"
   ]
}]
