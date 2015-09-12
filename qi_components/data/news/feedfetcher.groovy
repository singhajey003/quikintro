@Grab('org.biogroovy:biogroovy:1.1.1')
import org.biogroovy.io.rss.IRSSSlurper
import org.biogroovy.io.rss.RSSSlurper
import org.biogroovy.io.rss.IRSSWriter
import org.biogroovy.io.rss.RSSJSONFileWriter

import org.biogroovy.models.RSSFeed
import groovy.json.JsonSlurper

/**
 * This is a groovy shell script.  To run this, you need to install groovy (use gvm to install groovy).
 * Enter groovy ./feedfetcher.groovy to fetch the data.
 * The output is written to your home directory
 */

IRSSSlurper slurper = new RSSSlurper();

File dir = new File(".");

// create the output directory
File outdir = new File(System.getProperty("user.home"),"feeds")
if(!outdir.exists()){
    outdir.mkdir();
}

// parse the registry of feeds
File sources = new File(dir, "feeds.json")
JsonSlurper jsonSlurper = new JsonSlurper();
feeds = jsonSlurper.parse(sources);

// iterate through the feeds and parse each one.  Output the results to 
// its own feed-specific JSON file.
feeds.each{ feed ->

        try{
            println "Processing Feed: " + feed.name
            File outfile = new File(outdir, feed.'short-name' + ".json");
            FileWriter writer = new FileWriter(outfile);
            URL url = new URL(feed.url);
        
            RSSFeed rssFeed = slurper.readSource(url.openStream());

            IRSSWriter rssWriter = new RSSJSONFileWriter();
            rssWriter.write(rssFeed, writer);
        }catch (Exception ex){
            ex.printStackTrace();
        }

}
        