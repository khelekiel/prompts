const prompts = [
  "You are an assistant construction manager preparing for your first project meeting. Your supervisor wants to use one real project scheduling method, but you believe a different real scheduling method would work better. Write about 350 words persuading your supervisor to change plans. Include specific advantages and disadvantages of each method.",
  "You work for a company that manufactures cleaning products. Your manager is considering replacing one real chemical ingredient with another real ingredient. Write about 350 words explaining whether this change is a good idea. Include information about safety, cost, effectiveness, and environmental impact.",
  "You are the newest electrical engineer on your team. The team currently uses one real testing instrument, but you recommend a different real instrument. Write about 350 words persuading the team to make the switch. Explain how each instrument works and why your recommendation is better.",
  "Your company needs to build a new customer website. Your manager has suggested one real programming language or framework, but you recommend another. Write about 350 words explaining your recommendation. Include examples of companies or projects that use the technology.",
  "You have been asked to recommend one real type of bearing, gear, or motor for a manufacturing machine. Write about 350 words explaining why your choice is better than another real option. Discuss performance, maintenance, cost, and expected lifespan.",
  "A homeowner wants to build a new house. They are deciding between two real building materials for the exterior. Write about 350 words educating the homeowner about the strengths and weaknesses of each material and recommending one.",
  "A local farm wants to purchase a new irrigation system. Write about 350 words comparing two real irrigation systems or technologies and recommending the better choice. Include information about installation, maintenance, water use, and long-term costs.",
  "A building project is falling behind schedule. Write about 350 words convincing the project manager to adopt one real construction management technique or software tool to improve productivity. Explain how it works and why it would help.",
  "Your factory must choose between two real methods of water treatment. Write about 350 words recommending one approach to the plant manager. Include technical facts, operating costs, and environmental considerations.",
  "A homeowner wants to install backup power for their house. Write about 350 words explaining whether they should choose a real standby generator or a real battery backup system. Include product examples and explain the advantages and drawbacks of each.",
  "Your school is deciding which real database system to use for student records. Write about 350 words recommending one option to the technology director. Explain how it compares with another database and why it best fits the school's needs.",
  "A company is replacing its air compressors. Write about 350 words recommending one real compressor type or model over another. Include efficiency, maintenance, noise, and operating costs.",
  "Your architecture firm is choosing one real green building certification program for a new office building. Write about 350 words persuading the client to pursue that certification. Explain the requirements, benefits, and potential drawbacks.",
  "A greenhouse owner wants to automate climate control. Write about 350 words recommending one real environmental control system or technology. Include specific products or manufacturers and explain how the system improves plant growth.",
  "Your company is considering purchasing one real construction management software package instead of another. Write about 350 words recommending the better option to company leadership. Discuss scheduling, communication, budgeting, and ease of use.",
  "A plastics manufacturer wants to change to a real biodegradable material. Write about 350 words explaining whether the switch is practical. Include manufacturing challenges, costs, and environmental benefits.",
  "A factory is replacing its lighting. Write about 350 words recommending one real commercial lighting technology or product line. Explain energy savings, installation costs, maintenance, and expected return on investment.",
  "Your employer needs a new cybersecurity solution. Write about 350 words recommending one real cybersecurity platform or service instead of another. Include features, costs, and situations where each product performs well.",
  "A city is purchasing new buses. Write about 350 words recommending diesel, hybrid, battery-electric, or hydrogen fuel cell buses, using real manufacturers and models as examples. Explain the benefits and trade-offs.",
  "A family farm wants to purchase its first drone. Write about 350 words recommending one real agricultural drone model and explaining how it can improve crop management. Include specific features and limitations.",
  "Your company is choosing between two real concrete mixes for a bridge project. Write about 350 words recommending one option to the project engineer. Explain the strengths, weaknesses, costs, and expected durability of each mix.",
  "A homeowner wants to install solar panels. Write about 350 words explaining whether one real brand of solar panels is a better choice than another. Include efficiency, warranty, cost, and expected lifespan.",
  "Your manufacturing company needs a new CAD software package. Write about 350 words recommending one real program over another. Explain how each program supports engineering design and collaboration.",
  "A local government is replacing an aging water pipeline. Write about 350 words recommending one real pipe material over another. Include installation, maintenance, lifespan, and environmental considerations.",
  "You have been asked to recommend one real welding process for a manufacturing project. Write about 350 words explaining why it is the best choice compared to another welding method.",
  "Your architecture firm is selecting one real roofing material for a public library. Write about 350 words recommending your choice to the client. Include appearance, durability, maintenance, and cost.",
  "A farm wants to reduce fertilizer use. Write about 350 words recommending one real precision agriculture technology that could help. Explain how it works and the benefits it provides.",
  "Your employer is choosing between two real cloud computing providers. Write about 350 words recommending one provider for the company's new engineering applications.",
  "A warehouse is replacing its forklifts. Write about 350 words recommending electric or propane forklifts, using real manufacturers or models as examples. Explain the advantages and disadvantages of each.",
  "Your city wants to install electric vehicle charging stations. Write about 350 words recommending one real charging station manufacturer or product line. Include installation requirements, reliability, and maintenance.",
  "A construction company is deciding whether to purchase one real drone surveying system. Write about 350 words explaining whether the investment is worthwhile. Include specific products and examples of how they improve surveying.",
  "Your laboratory is replacing its 3D printer. Write about 350 words recommending one real printer over another for producing engineering prototypes.",
  "Your employer wants to standardize on one real project communication platform. Write about 350 words recommending your preferred software. Include features that improve teamwork and project organization.",
  "A homeowner wants to install a new heating and cooling system. Write about 350 words comparing two real HVAC systems or brands and recommending one.",
  "A factory is considering replacing its conveyor system. Write about 350 words recommending one real conveyor technology or manufacturer. Include productivity, maintenance, and safety considerations.",
  "Your architecture firm is choosing one real insulation material for a new office building. Write about 350 words recommending your preferred material. Include energy efficiency, installation, cost, and environmental impact.",
  "A local farm wants to improve soil health. Write about 350 words recommending one real soil testing service or technology. Explain how it works and how it benefits the farm.",
  "Your company needs to improve cybersecurity training. Write about 350 words recommending one real cybersecurity awareness platform instead of another. Include specific features and expected outcomes.",
  "A machine shop wants to purchase a new CNC machine. Write about 350 words recommending one real manufacturer or model. Explain why it best meets the company's needs.",
  "A school district is building a new STEM laboratory. Write about 350 words recommending one real laboratory equipment supplier. Include product quality, customer support, and value.",
  "Your company is choosing between two real web hosting services for a new engineering website. Write about 350 words recommending one option and explaining your reasoning.",
  "A homeowner wants to install smart home technology. Write about 350 words recommending one real smart home ecosystem over another. Include compatibility, ease of use, security, and cost.",
  "A manufacturing plant wants to reduce workplace injuries. Write about 350 words recommending one real safety management program, certification, or technology. Explain how it improves safety.",
  "Your construction company is selecting one real laser measuring or layout tool. Write about 350 words recommending your preferred instrument and explaining why it is worth the investment.",
  "A food processing plant needs to replace its refrigeration equipment. Write about 350 words recommending one real refrigeration technology or manufacturer. Include efficiency, maintenance, and operating costs.",
  "Your engineering team is deciding between two real version control platforms. Write about 350 words recommending one platform for software development and explaining why it better supports collaboration.",
  "A community is planning a new playground. Write about 350 words recommending one real playground surface material over another. Include safety, maintenance, accessibility, and long-term costs.",
  "A farm cooperative wants to purchase a new grain dryer. Write about 350 words recommending one real grain dryer manufacturer or model. Explain its advantages compared to another option.",
  "Your employer is replacing office computers used for engineering design. Write about 350 words recommending one real workstation manufacturer or product line. Include processing power, reliability, and value.",
  "A city is planning to improve pedestrian safety at busy intersections. Write about 350 words recommending one real traffic signal technology, crossing system, or traffic management solution. Explain how it works, discuss its costs, and persuade city officials that it is the best investment."
];



let last_prompt = -1
function pick_prompt() {
    let random_index;
    do {
        random_index = Math.floor(Math.random() * prompt_array.length);
    } while (random_index === last_prompt);
    last_prompt = random_index;
    document.getElementById("prompt").innerHTML = prompt_array[random_index];
}
