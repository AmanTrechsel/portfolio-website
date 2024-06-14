class Constants
  def initialize
    @basicSchoolProjectContent = "<div class='full-fill'><div class='school-project-content'><div class='school-project-header' style='background-image: url(../assets/img/banner/{{type}}.jpg);'><h1 data-localize=\"{{type}}_name\"></h1></div><p data-localize=\"{{type}}_duration\"></p><p data-localize=\"{{type}}_members\"></p><br><p data-localize=\"{{type}}_description\"></p><p data-localize=\"{{type}}_made_using\"></p><br>{{uniqueContent}}</div></div>"
    @basicPersonalProjectContent = "<div class='full-fill'><div class='personal-project-content'><div class='personal-project-header' style='background-image: url(../assets/img/banner/{{type}}.jpg);'><h1 data-localize=\"{{type}}_name\"></h1></div><p data-localize=\"{{type}}_description\"></p><br>{{uniqueContent}}</div></div>"
    @contactFormContent = "<div class='full-fill'><div class='other-content'><h1 data-localize=\"contact\"></h1><p data-localize=\"contact_subtitle\"></p><p data-localize=\"contact_alternative\"></p><form id='contactForm' action='#'><label for='name'><span class='required'>*</span> <span data-localize=\"name\"></span>:</label><input type='text' id='name' name='name' autocomplete='name' title='' required><label for='email'><span class='required'>*</span> <span data-localize=\"email\"></span>:</label><input type='email' id='email' name='email' autocomplete='email' title='' required><label for='subject' name='subject'><span class='required'>*</span> <span data-localize=\"subject\"></span>:</label><input type='text' id='subject' name='subject' autocomplete='subject' title='' required><label for='message'><span class='required'>*</span> <span data-localize=\"message\"></span>:</label><textarea name='message' id='message' autocomplete='off' title='' required></textarea><button onclick='submitContactForm(event)' data-localize=\"send\"></button><p id='error' data-localize=\"mail_error\"></p></form></div></div>"
    @iframeFile = "<div class='full-fill'><div class='other-content'><button onclick='openURL(\"./assets/{{loadFile}}\")' data-localize=\"open_seperate\"></button><iframe targetSource=\"./assets/{{loadFile}}\"></iframe></div></div>"
    @videoFile = "<div class='full-fill'><div class='other-content'><button onclick='openURL(\"./assets/video/{{loadFile}}\")' data-localize=\"open_seperate\"></button><video controls preload=\"none\"><source src=\"./assets/video/{{loadFile}}\" type=\"video/mp4\"><p data-localize=\"video_not_supported\"></p></video></div></div>"
    @audioFile = "<div class='full-fill'><div class='other-content'><button onclick='openURL(\"./assets/audio/{{loadFile}}\")' data-localize=\"open_seperate\"></button><audio controls preload=\"none\"><source src=\"./assets/audio/{{loadFile}}\" type=\"audio/mp3\"><p data-localize=\"audio_not_supported\"></p></audio></div></div>"
    @sunnyContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://github.com/Raeven69/Sunny')\">Github</button><button class=\"project-button\" onclick=\"openURL('https://raeven69.github.io/Sunny/')\">Website</button>")
    @morgisterContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://github.com/AmanTrechsel/Team-Bravo')\">Github</button><p class=\"note\" data-localize=\"morgister_note\"></p>")
    @battlebotsContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button onclick='openURL(\"./assets/video/battlebots.mp4\")' data-localize=\"open_seperate\"></button><video controls preload=\"none\"><source src=\"./assets/video/battlebots.mp4\" type=\"video/mp4\"><p data-localize=\"video_not_supported\"></p></video><button class=\"project-button\" onclick=\"openURL('https://github.com/AmanTrechsel/Jasir-en-de-rest')\">Github</button>")
    @timeWiseContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button onclick='openURL(\"./assets/video/PS_Y1S2_Digitale_Presentatie.mp4\")' data-localize=\"open_seperate\"></button><video controls preload=\"none\"><source src=\"./assets/video/PS_Y1S2_Digitale_Presentatie.mp4\" type=\"video/mp4\"><p data-localize=\"video_not_supported\"></p></video><button class=\"project-button\" onclick=\"openURL('https://github.com/AmanTrechsel/WildInnovators')\">Github</button><button class=\"project-button\" onclick=\"openURL('https://aman.gg/timewise')\">Website</button><button class=\"project-button\" onclick=\"openURL('https://play.google.com/store/apps/details?id=com.WildInnovators.TimeWise')\">Google Play</button><button class=\"project-button\" onclick=\"openURL('https://aman.gg/timewise/TimeWise.apk')\">Download App (APK)</button><button class=\"project-button\" onclick=\"openURL('https://aman.gg/timewise/WebEditor_Windows.zip')\">Download WebEditor (Win)</button><p class=\"note\" data-localize=\"timewise_note\"></p><p class=\"note\" data-localize=\"timewise_note_2\"></p>")
    @duoContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://www.rijksorganisatieodi.nl/actueel/nieuws/2023/11/16/studenten-ontwikkelen-applicatie-voor-toegankelijkheid-websites')\" data-localize=\"article\"></button><button class=\"project-button\" onclick=\"openURL('https://gitlab.com/nhlstendenIT/inf2023/duo/duo')\">Gitlab</button><button class=\"project-button\" onclick=\"openURL('http://www.werkenbijduotest.nl/')\">Website</button><p class=\"note\" data-localize=\"only_for_authorized\"></p>")
    @trainingssiteContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://gitlab.com/nhlstendenIT/inf2023/duowebsite/duo')\">Gitlab</button><button class=\"project-button\" onclick=\"openURL('http://digitoeshop.nl/')\">Website</button><p class=\"note\" data-localize=\"only_for_authorized\"></p>")
    @hboMinContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://gitlab.com/kspalink/data-processing')\">Gitlab</button><button class=\"project-button\" onclick=\"openURL('https://github.com/HuubHamstra/data-processing-api')\">API</button><p class=\"note\" data-localize=\"only_for_authorized\"></p>")
    @racesimDashboardContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<img src=\"../assets/img/dashboard.webp\" alt=\"RaceSim Dashboard\" class=\"project-image\"><button class=\"project-button\" onclick=\"openURL('https://github.com/AmanTrechsel/SimRacing-Dashboard')\">Dashboard Github</button>")
    @jabberpointContent = @basicSchoolProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://github.com/AmanTrechsel/JabberPoint')\">Github</button>")
    @pivotContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/pivot/')\">Forum</button>")
    @shatteredLightContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/shattered-light/')\">Forum</button>")
    @lastWishContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/last-wish/')\">Forum</button>")
    @lastWish2Content = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/last-wish-2/')\">Forum</button>")
    @ethosContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/ethos/')\">Forum</button>")
    @spliceContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/splice/')\">Forum</button>")
    @spaceTrainersContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/7057/')\">Forum</button>")
    @beekeeperContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/beekeeper/')\">Forum</button>")
    @quantumContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/quantum/')\">Forum</button>")
    @pokeClickerContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/3568/')\">Forum</button>")
    @pokeScape3DContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/3468/')\">Forum</button>")
    @dwContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/2664/')\">Forum</button>")
    @zoruaContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/2513/')\">Forum</button>")
    @watermelonsWithGarchompContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/4451/')\">Forum</button>")
    @politoaderContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/4450/')\">Forum</button>")
    @theCakeIsRealContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/4453/')\">Forum</button>")
    @pokemonTrashIslandContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/4449/')\">Forum</button>")
    @topsyTurvyContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/4452/')\">Forum</button>")
    @myFriendRioluContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://sites.google.com/view/thundagas-games/pog-jam?authuser=0')\">Forum</button><p class=\"note\" data-localize=\"my_friend_riolu_note\"></p>")
    @wogTogContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/5185/')\">Forum</button>")
    @poggersLegendsContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/7072/')\">Forum</button>")
    @gameOfSleepContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/5057/')\">Forum</button>")
    @ompContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/threads/6008/')\">Forum</button>")
    @vmsContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/1453/')\">Forum</button>")
    @voeContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/1087/')\">Forum</button>")
    @vhtContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/400/')\">Forum</button>")
    @vaspContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/804/')\">Forum</button>")
    @vpmContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/692/')\">Forum</button>")
    @vtgContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/914/')\">Forum</button>")
    @pokesearchContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/849/')\">Forum</button>")
    @emeraldUIPackContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/965/')\">Forum</button>")
    @onepxCharacterCreatorContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://eeveeexpo.com/resources/724/')\">Forum</button>")
    @planetStrandedContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://voltseon.itch.io/planet-stranded')\">Forum</button>")
    @busCatchingContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<button class=\"project-button\" onclick=\"openURL('https://play.google.com/store/apps/details?id=com.voltseon.com')\">Download</button>")
    @portfolioWebsiteContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<h3 data-localize=\"portfolio-website_localization_header\"></h3><p data-localize=\"portfolio-website_localization\"></p><h3 data-localize=\"portfolio-website_dynamic_header\"></h3><p data-localize=\"portfolio-website_dynamic\"></p><br><button class=\"project-button\" onclick=\"openURL('https://github.com/AmanTrechsel/portfolio-website')\">Github</button>")
    @dndContent = @basicPersonalProjectContent.gsub("{{uniqueContent}}", "<h3 data-localize=\"dnd_players_heading\"></h3><p data-localize=\"dnd_players\"></p><h3 data-localize=\"dnd_website_heading\"></h3><p data-localize=\"dnd_website\"></p><img src=\"../assets/img/dnd_website.webp\" alt=\"Dungeons & Dragons Website\" class=\"project-image\"><h3 data-localize=\"dnd_planning_heading\"></h3><p data-localize=\"dnd_planning\"></p><img src=\"../assets/img/dnd_planning.webp\" alt=\"Dungeons & Dragons Planning\" class=\"project-image\">")
    @aboutContent = "<div class='full-fill'><div class='other-content'><h1 data-localize=\"about\"></h1><p data-localize=\"about_intro\"></p><h2 data-localize=\"skills\"></h2><h3 data-localize=\"programming_languages\"></h3><ul><li>Java</li><li>Ruby</li><li>C#</li><li>Python</li><li>JavaScript</li><li>HTML</li><li>CSS</li><li>PHP</li><li>MySQL</li></ul><h3 data-localize=\"languages\"></h3><ul><li data-localize=\"dutch\"></li><li data-localize=\"english\"></li><li data-localize=\"german\"></li></ul><h3 data-localize=\"frameworks_and_tools\"></h3><ul><li>Unity</li><li>RPG Maker XP</li><li>GitHub</li><li>Visual Studio Code</li><li>IntelliJ IDEA</li><li>Android Studio</li><li>Paint.NET</li><li>Figma</li><li>Audacity</li><li>Blender</li><li>Microsoft Office</li></ul><h2 data-localize=\"education\"></h2><h3>NHL Stenden Emmen</h3><p>Software Engineering</p><p>Bachelor</p><p>2022 - <span data-localize=\"present\"></span></p><h3>NHL Stenden Leeuwarden</h3><p>Communication & Multimedia Design</p><p data-localize=\"unfinished\"></p><p>2020 - 2022</p><h3>Esdal College Oosterstraat</h3><p>HAVO (N&T)</p><p>2015 - 2020</p><h2 data-localize=\"interests\"></h2><ul><li>Software Development</li><li>Game Development</li><li>Web Development</li><li>Graphics Programming</li><li>Machine Learning</li><li data-localize=\"music_bass\"></li></ul><h2 data-localize=\"qualities\"></h2><ul><li data-localize=\"creative\"></li><li data-localize=\"independent\"></li><li data-localize=\"modest\"></li><li data-localize=\"product_driven\"></li></ul></div></div>"
  end

  def getVariable(varname)
    return instance_variable_get("@#{varname}")
  end
end

@constants = Constants.new

# Get the directory where the script is located
script_directory = File.expand_path(File.dirname(__FILE__))

# Define the target directory (you can change this to your desired location)
target_directory = File.join(script_directory, 'output')

class Window
  attr_accessor :type, :name, :icon, :content, :desktop, :loadFile

  def initialize(type, name = "", icon = "Basic", content = "", desktop = false, loadFile = "")
    @type = type
    @name = name
    @icon = icon
    @content = content
    @desktop = desktop
    @loadFile = loadFile
  end

  def type; @type; end
end

NAVMENU_BUTTON = "<button class='navbar-button' id={{type}} data-localize='{{type}}_name' onclick='openPage(\"{{type}}\")'></button>";
SUBMENU = "<div class='navbar-submenu' id='{{type}}-submenu' structure={{structure}} style='background-color: {{background}}; margin-left: {{margin}}'>{{submenu}}</div>";
COLORS = {
  0 => '#442292',
  1 => '#3A1F88',
  2 => '#2F117C',
  3 => '#200B6E'
}

windows_json = File.join(script_directory, 'assets/json/windows.json')
@windows = {}
current_window = nil
File.open(windows_json, 'r') do |file|
  file.each_line do |line|
    line = line.strip
    if line.end_with?('{')
      current_window = Window.new(line[0..-2].gsub('"','').gsub(":","").strip)
    elsif line.start_with?('}')
      next if current_window == nil
      @windows[current_window.type] = current_window
      current_window = nil
    else
      next if current_window == nil
      key, value = line.gsub('"',"").gsub(",","").split(':')
      key = key.strip
      value = value.strip
      value += line.split(value)[1] if line.include?('{{link=')
      case key
      when 'name'
        current_window.name = value
      when 'icon'
        current_window.icon = value
      when 'content'
        current_window.content = value
      when 'desktop'
        current_window.desktop = value
      when 'loadFile'
        current_window.loadFile = value
      end
    end
  end
end

@parsed = []

def parse_simple_nav_content(window, index, depth)
  return "" if window == nil
  content = (" " * (depth > 0 ? 0 : ((depth + 3) * 2))) + NAVMENU_BUTTON.gsub('{{type}}', window.type) + "\n"
  if window.content != ""
    if window.content.include?('{{file=')
      submenu = ""
      files = window.content.gsub("}}","").split('{{file=')
      subindex = 0
      files.each do |file|
        subwindow = @windows[file.gsub("{{file=","").strip]
        submenu += (" " * ((depth + 3) * 2)) + parse_simple_nav_content(subwindow, "#{index}.#{subindex}", depth + 1) + "\n" + (" " * ((depth + 3) * 2))
        @parsed.push(subwindow)
        subindex += 1
      end
      content += (" " * ((depth + 4) * 2)) + SUBMENU.gsub('{{type}}', window.type).gsub('{{structure}}', "#{index}").gsub('{{background}}', COLORS[depth % 4]).gsub('{{margin}}', "#{depth * 10}px").gsub('{{submenu}}', submenu) + "\n"
    end
  end
  @parsed.push(window)
  return content
end

base_file = File.join(script_directory, 'assets/html/base_file.html')
base_nav_task = File.join(script_directory, 'assets/html/base_nav_task.html')
base_window = File.join(script_directory, 'assets/html/base_window.html')

@base_file_content = File.read(base_file)
@base_window_content = File.read(base_window)
@base_nav_task_content = File.read(base_nav_task)

@skipped_files = ["output", "generator", "timewise", "Build", "img", "audio", "assets"]

def readFile(window)
  new_content = parseContent(@base_file_content, window)
  new_content = new_content.gsub('class="file', 'class="file folder"') unless window.desktop
  return new_content
end

def readWindow(window)
  return parseContent(@base_window_content, window)
end

def readNavTask(window)
  return parseContent(@base_nav_task_content, window)
end

def parseContent(content, window, reparse = true)
  content = content.gsub('{{content}}', window.content)
  content = content.gsub(/{{var=([^}]+)}}/) do |match|
    @constants.getVariable($1)
  end
  content = content.gsub(/{{file=([^}]+)}}/) do |match|
    readFile(@windows[$1])
  end
  content = content.gsub(/{{link=([^}]+)}}/) do |match|
    "<button class=\"project-button\" onclick=\"openURL('#{$1}')\">Open Link</button>"
  end
  content = content.gsub('{{type}}', window.type)
  content = content.gsub('{{name}}', window.name)
  content = content.gsub('{{icon}}', window.icon)
  content = content.gsub('{{loadFile}}', window.loadFile)
  content = content.gsub('{{window}}', window.type)
  content = parseContent(content, window, false) if reparse
  return content
end

@index_content = ""
@index_windows = ""
@index_nav_tasks = ""
@simple_nav_content = ""

index = 0
@windows.each_value do |window|
  # Index Content
  @index_content += readFile(window) + "\n" if window.desktop

  # Index Windows
  @index_windows += readWindow(window) + "\n"

  # Index Nav Tasks
  @index_nav_tasks += readNavTask(window) + "\n"

  # Simple Nav Content
  @simple_nav_content += parse_simple_nav_content(window, index, 0) unless (@parsed.include?(window))
  index += 1
end

# Create the target directory if it doesn't exist
Dir.mkdir(target_directory) unless Dir.exist?(target_directory)

# Method to copy files and directories recursively
def copy_recursive(src, dest)
  return if src.end_with?('.rb') || src.end_with?('.db') || src.end_with?('.json')
  return if @skipped_files.any? { |file| src.include?(file) }
  if File.directory?(src)
    return if src.end_with?('output') || src.end_with?('html') || src.end_with?('json')
    # Create the directory in the destination
    Dir.mkdir(dest) unless Dir.exist?(dest)

    # Get the entries of the directory, ignoring '.' and '..'
    entries = Dir.entries(src) - %w[. ..]

    # Recursively copy each entry
    entries.each do |entry|
      copy_recursive(File.join(src, entry), File.join(dest, entry))
    end
  else
    # Copy the file
    new_content = ""
    if src.end_with?('.html')
      File.open(src, 'rb') do |source_file|
        search = [false] * 6
        source_file.each_line do |line|
          if src.end_with?('index.html')
            if search[0] && !search[3]
              new_content += @index_content
              search[3] = true
            end
            if search[1] && !search[4]
              new_content += @index_windows
              search[4] = true
            end
            if search[2] && !search[5]
              new_content += @index_nav_tasks
              search[5] = true
            end
            search[0] = true if line.include?('<div class="content">')
            search[1] = true if line.include?('<div class="windows">')
            search[2] = true if line.include?('<div class="nav-tasks">')
          elsif src.end_with?('simple.html')
            if search[0] && !search[1]
              new_content += @simple_nav_content
              search[1] = true
            end
            search[0] = true if line.include?('<div class="navbar">')
          end
          new_content += line
        end
      end
    elsif src.end_with?('.js')
      new_content = File.read(src).gsub("setTimeout(() => { loadFiles(); loadWindows(); }, 1000);", "").gsub("setTimeout(() => { loadFiles(); }, 1000);", "")
    else
      new_content = File.read(src)
    end
    File.open(dest, 'wb') do |dest_file|
      dest_file.write(new_content)
    end
    #puts "Copied file #{src} to #{dest}"
  end
end

# Get all entries in the script directory (excluding the target directory itself)
entries = Dir.entries(script_directory) - %w[. ..] - [File.basename(target_directory)]

# Copy each entry to the target directory
entries.each do |entry|
  source = File.join(script_directory, entry)
  destination = File.join(target_directory, entry)
  copy_recursive(source, destination)
end

puts "All files and directories have been copied."
