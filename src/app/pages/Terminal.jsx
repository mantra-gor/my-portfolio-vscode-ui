import { useState, useEffect, useRef } from "react";
import {
  GitHub,
  LinkedIn,
  Email,
  Code,
  ContentCopy,
  ChevronRight,
  Close,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Paper,
  Button,
  Tabs,
  Tab,
  LinearProgress,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import personalData from "../data/personalData.json";
import { useTranslation } from "react-i18next";

const terminalFontStyle = {
  fontFamily: "Roboto Mono, monospace",
};

export default function Terminal({
  darkMode,
  closeTerminal,
  terminalContinued,
}) {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [terminalReady, setTerminalReady] = useState(false);
  const [commandIndex, setCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  // const [showProjects, setShowProjects] = useState(false);
  // const [showSkills, setShowSkills] = useState(false);
  const [activeTab, setActiveTab] = useState("terminal");
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const SHELL_PROMPT = "mantra-gor@ip-127.0.0.1";

  // Portfolio data
  const fullName = "Mantra Gor";
  const title = t("title");
  const welcomeText = t("welcomeText");

  const commandSequence = [
    { text: "sudo ./initialize_portfolio.sh", delay: 80, pause: 700 },
    {
      text: `Loading portfolio data for ${fullName}...`,
      delay: 40,
      pause: 900,
    },
    { text: `Initializing virtual environment...`, delay: 40, pause: 600 },
    { text: `Establishing secure connection...`, delay: 40, pause: 500 },
    { text: `Successfully loaded portfolio v2.5.4`, delay: 40, pause: 400 },
  ];

  const skills = [
    { name: "Problem Solving", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "CSS/SCSS", level: 85 },
    { name: "MongoDB", level: 70 },
  ];

  const projects = [
    {
      name: "StudyNotion",
      tech: "React, Node.js, Express.js, MongoDB",
      description: t("project_1-description"),
    },
    {
      name: "BillSane",
      tech: "React, Electron JS",
      description: t("project_2-description"),
    },
  ];

  // Available commands
  const commands = {
    help: () => {
      return (
        <Box sx={{ mt: 2, color: "#0C910C" }}>
          <Typography
            sx={{
              color: darkMode ? "#FFFF00" : "#f5bd02",
              fontWeight: "bold",
              fontSize: "14px",
              ...terminalFontStyle,
            }}
          >
            {/* {t("availabe-commands")} */}
            Available commands:
          </Typography>
          <Typography sx={{ ...terminalFontStyle, fontSize: "14px" }}>
            <span style={{ color: "#11a8cd" }}>about</span> - Display
            information about me
          </Typography>
          <Typography sx={{ ...terminalFontStyle, fontSize: "14px" }}>
            <span style={{ color: "#11a8cd" }}>skills</span> - List my technical
            skills
          </Typography>
          <Typography sx={{ ...terminalFontStyle, fontSize: "14px" }}>
            <span style={{ color: "#11a8cd" }}>projects</span> - View my
            portfolio projects
          </Typography>
          <Typography sx={{ ...terminalFontStyle, fontSize: "14px" }}>
            <span style={{ color: "#11a8cd" }}>contact</span> - Show contact
            information
          </Typography>
          <Typography sx={{ ...terminalFontStyle, fontSize: "14px" }}>
            <span style={{ color: "#11a8cd" }}>clear</span> - Clear the terminal
          </Typography>
          <Typography sx={{ ...terminalFontStyle, fontSize: "14px" }}>
            <span style={{ color: "#11a8cd" }}>help</span> - Show this help
            message
          </Typography>
        </Box>
      );
    },
    about: () => {
      return (
        <Box sx={{ my: 2 }}>
          <Typography
            sx={{
              ...terminalFontStyle,
              fontSize: "14px",
              color: darkMode ? "#f7f7f7" : "#1A1A1A",
            }}
          >
            Hello! I'm {fullName}, a passionate Software Developer.
          </Typography>
          <Typography
            sx={{
              ...terminalFontStyle,
              fontSize: "14px",
              color: darkMode ? "#f7f7f7" : "#1A1A1A",
            }}
          >
            {" "}
            I specialize in building modern web applications with cutting-edge
            technologies. With a strong foundation in both frontend and backend
            development, I create scalable and user-friendly solutions for
            complex problems.
          </Typography>
          <Typography
            sx={{
              ...terminalFontStyle,
              fontSize: "14px",
              color: darkMode ? "#f7f7f7" : "#1A1A1A",
            }}
          >
            {" "}
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge through
            technical writing.
          </Typography>
        </Box>
      );
    },
    skills: () => {
      // setShowSkills(true);
      // setTimeout(() => {
      //   setShowSkills(false);
      // }, 10000);

      return (
        <Box sx={{ my: 2 }}>
          <Typography
            sx={{ color: darkMode ? "#FFFF00" : "#f5bd02", fontWeight: "bold" }}
          >
            Technical Skills:
          </Typography>
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {skills.map((skill, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "#11a8cd", width: "200px" }}>
                  {skill.name}
                </Typography>
                <Box sx={{ width: 200, mx: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 10,
                      borderRadius: 1,
                      bgcolor: "#333",
                      "& .MuiLinearProgress-bar": {
                        background:
                          "linear-gradient(to right, #3a7bd5, #9b59b6)",
                        animation: `growBar 1.5s ease-out ${
                          index * 0.2
                        }s forwards`,
                      },
                    }}
                  />
                </Box>
                <Typography sx={{ ml: 1, color: "#0C910C" }}>
                  {skill.level}%
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      );
    },
    projects: () => {
      // setShowProjects(true);
      return (
        <Box sx={{ my: 2 }}>
          <Typography
            sx={{ color: darkMode ? "#FFFF00" : "#f5bd02", fontWeight: "bold" }}
          >
            Portfolio Projects:
          </Typography>
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {projects.map((project, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  bgcolor: darkMode ? "#1E1E1E" : "#f4f4f4",
                  border: "1px solid #a0a0a0",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <DashboardIcon
                      sx={{ color: "#9b59b6", mr: 1, fontSize: 18 }}
                    />
                    <Typography sx={{ color: "#11a8cd", fontWeight: "bold" }}>
                      {project.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#888",
                      fontSize: "0.875rem",
                      mt: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Code sx={{ mr: 0.5, fontSize: 16 }} />
                    {project.tech}
                  </Typography>
                  <Typography sx={{ color: "#0C910C", mt: 1 }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      );
    },
    contact: () => {
      return (
        <Box sx={{ my: 2, overflow: scroll }}>
          <Typography
            sx={{ color: darkMode ? "#FFFF00" : "#f5bd02", fontWeight: "bold" }}
          >
            Connect with me:
          </Typography>
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                href={personalData.social_media.github.link}
                target="_blank"
                startIcon={<GitHub />}
                sx={{
                  color: "#29B6F6",
                  textTransform: "none",
                  "&:hover": { color: "#4FC3F7" },
                }}
              >
                github.com/{personalData.social_media.github.username}
              </Button>
              <IconButton
                onClick={() =>
                  copyToClipboard(personalData.social_media.github.link)
                }
                size="small"
                sx={{ color: "#777", "&:hover": { color: "#fff" } }}
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                href={personalData.social_media.linkedin.link}
                target="_blank"
                startIcon={<LinkedIn />}
                sx={{
                  color: "#29B6F6",
                  textTransform: "none",
                  "&:hover": { color: "#4FC3F7" },
                }}
              >
                linkedin.com/in/{personalData.social_media.linkedin.username}
              </Button>
              <IconButton
                onClick={() =>
                  copyToClipboard(personalData.social_media.linkedin.link)
                }
                size="small"
                sx={{ color: "#777", "&:hover": { color: "#fff" } }}
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                href={`mailto:${personalData.email}`}
                startIcon={<Email />}
                sx={{
                  color: "#29B6F6",
                  textTransform: "none",
                  "&:hover": { color: "#4FC3F7" },
                }}
              >
                {personalData.email}
              </Button>
              <IconButton
                onClick={() => copyToClipboard(personalData.email)}
                size="small"
                sx={{ color: "#777", "&:hover": { color: "#fff" } }}
              >
                <ContentCopy fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      );
    },
    clear: () => {
      setHistory([]);
      return null;
    },
    default: (cmd) => {
      return (
        <Typography sx={{ color: "#FF6B6B", mt: 1 }}>
          Command not found: {cmd}. Type 'help' for available commands.
        </Typography>
      );
    },
  };

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Initial terminal sequence
  useEffect(() => {
    if (commandIndex >= commandSequence.length || terminalContinued) {
      setTerminalReady(true);
      return;
    }

    const command = commandSequence[commandIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= command.text.length) {
        setText(command.text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "command", content: command.text },
          ]);
          setText("");
          setCommandIndex((prevIndex) => prevIndex + 1);
        }, command.pause);
      }
    }, command.delay);

    setHistory([]);
    return () => clearInterval(typeInterval);
  }, [commandIndex]);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, text]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentCommand.trim()) {
      e.preventDefault();

      // Add command to history
      const cmd = currentCommand.trim().toLowerCase();
      setHistory((prev) => [...prev, { type: "command", content: cmd }]);

      // Process command
      const commandFn = commands[cmd] || (() => commands.default(cmd));
      const output = commandFn();

      if (output) {
        setHistory((prev) => [...prev, { type: "output", content: output }]);
      }

      setCurrentCommand("");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setHistory((prev) => [
      ...prev,
      {
        type: "output",
        content: (
          <Typography
            sx={{ fontSize: "12px", color: "#0C910C", ...terminalFontStyle }}
          >
            ✓ Copied to clipboard!
          </Typography>
        ),
      },
    ]);
  };

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#1A1A1A",
        color: "#FFF",
      }}
    >
      {/* Terminal Tab Bar */}
      <Paper
        square
        elevation={0}
        sx={{
          bgcolor: darkMode ? "#1A1A1A" : "#f7f7f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          sx={{
            minHeight: "40px",
            "& .MuiTabs-indicator": {
              backgroundColor: "#3a7bd5",
            },
          }}
        >
          <Tab
            iconPosition="start"
            disabled
            label="PROBLEMS"
            value="problems"
            sx={{
              minHeight: "40px",
              fontSize: "0.8rem",
              color:
                activeTab === "output"
                  ? darkMode
                    ? "#fff"
                    : "#aaa"
                  : "inherit",
            }}
          />{" "}
          <Tab
            iconPosition="start"
            disabled
            label="OUTPUT"
            value="output"
            sx={{
              minHeight: "40px",
              fontSize: "0.8rem",
              color:
                activeTab === "output"
                  ? darkMode
                    ? "#fff"
                    : "#aaa"
                  : "inherit",
            }}
          />{" "}
          <Tab
            iconPosition="start"
            disabled
            label="DEBUG CONSOLE"
            value="debug_console"
            sx={{
              minHeight: "40px",
              fontSize: "0.8rem",
              color:
                activeTab === "output"
                  ? darkMode
                    ? "#fff"
                    : "#aaa"
                  : "inherit",
            }}
          />
          <Tab
            iconPosition="start"
            disabled
            label="PORTS"
            value="ports"
            sx={{
              minHeight: "40px",
              fontSize: "0.8rem",
              color:
                activeTab === "output"
                  ? darkMode
                    ? "#fff"
                    : "#aaa"
                  : "inherit",
            }}
          />
          <Tab
            iconPosition="start"
            label="TERMINAL"
            value="terminal"
            sx={{
              minHeight: "40px",
              fontSize: "0.8rem",
              color:
                activeTab === "output"
                  ? darkMode
                    ? "#fff"
                    : "#aaa"
                  : "inherit",
            }}
          />
        </Tabs>

        <div>
          <Button
            sx={{
              color: darkMode ? "#f7f7f7" : "#1A1A1A",
              mx: 1,
              width: 25,
              height: 25,
              minWidth: 0,
              padding: 0,
              borderRadius: 1,
            }}
            onClick={closeTerminal}
          >
            <Close />
          </Button>
        </div>
      </Paper>

      {/* Terminal Content */}

      <Box
        sx={{
          p: 0,
          flexGrow: 1,
          outline: "none",
          overflow: "scroll",
          scrollBehavior: "smooth",
          bgcolor: darkMode ? "#1A1A1A" : "#f7f7f7",
        }}
        onClick={() => inputRef.current?.focus()}
      >
        <Box
          ref={terminalRef}
          sx={{
            p: 2,
            height: "100%",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              bgcolor: "#1A1A1A",
            },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: "#444",
              borderRadius: "4px",
            },
          }}
        >
          {!terminalReady ? (
            // Initialization sequence
            <Box>
              <Box sx={{ display: "flex", mb: 1 }}>
                <Typography
                  sx={{ color: "#4CAF50", mr: 1, ...terminalFontStyle }}
                >
                  $
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? "#f7f7f7" : "#1A1A1A",
                    ...terminalFontStyle,
                  }}
                >
                  {text}
                </Typography>
                {cursorVisible && (
                  <Box
                    component="span"
                    sx={{
                      color: darkMode ? "#f7f7f7" : "#1A1A1A",
                      fontWeight: "bold",
                      ml: "1px",
                    }}
                  >
                    ▋
                  </Box>
                )}
              </Box>
            </Box>
          ) : (
            // Interactive terminal
            <>
              {/* Welcome message */}
              <Box sx={{ mb: 3 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "fit-content",
                    marginBottom: "14px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: darkMode ? "#f7f7f7" : "#1A1A1A",
                      fontWeight: "bold",
                      mb: 0.5,
                      ...terminalFontStyle,
                    }}
                  >
                    {fullName}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#9b59b6",
                      mb: 1.5,
                      ...terminalFontStyle,
                    }}
                  >
                    {title}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    color: "#0C910C",
                    mb: 1.5,
                    ...terminalFontStyle,
                  }}
                >
                  {welcomeText}
                </Typography>
                <Typography
                  sx={{
                    color: darkMode ? "#FFFF00" : "#f5bd02",
                    fontSize: "0.875rem",
                    ...terminalFontStyle,
                  }}
                >
                  {t("type")}{" "}
                  <Box
                    component="span"
                    sx={{
                      bgcolor: darkMode ? "#333" : "#e6e6e6",
                      px: 0.5,
                      borderRadius: 0.5,
                    }}
                  >
                    help
                  </Box>{" "}
                  {t("to see available commands")}
                </Typography>
              </Box>

              {/* Command history */}
              <Box>
                {history.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ mb: 1, ml: item.type === "command" ? 0 : 2.5 }}
                  >
                    {item.type === "command" && (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ChevronRight
                          sx={{ color: "#4CAF50", mr: 0.5, fontSize: 18 }}
                        />
                        <Typography
                          sx={{
                            color: "#8BC34A",
                            fontWeight: "bold",
                            mr: 1,
                            ...terminalFontStyle,
                          }}
                          variant="body2"
                        >
                          {SHELL_PROMPT}:~$
                        </Typography>
                        <Typography
                          sx={{
                            color: darkMode ? "#f7f7f7" : "#1A1A1A",
                            ...terminalFontStyle,
                          }}
                          variant="body2"
                        >
                          {item.content}
                        </Typography>
                      </Box>
                    )}
                    {item.type === "output" && (
                      <Box sx={{ mt: 0.5, ...terminalFontStyle }}>
                        {item.content}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>

              {/* Current input line */}
              <Box sx={{ display: "flex", alignItems: "flex-start", mt: 1 }}>
                <ChevronRight
                  sx={{ color: "#4CAF50", mr: 0.5, fontSize: 18, mt: 0.3 }}
                />
                <Typography
                  sx={{
                    color: "#8BC34A",
                    fontWeight: "bold",
                    mr: 1,
                    mt: 0.2,
                    ...terminalFontStyle,
                  }}
                  variant="body2"
                >
                  {SHELL_PROMPT}:~$
                </Typography>
                <Box sx={{ flexGrow: 1, position: "relative" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="caret-none"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: darkMode ? "#f7f7f7" : "#1A1A1A",
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: "14px",
                    }}
                    autoFocus
                  />
                  {currentCommand === "" && cursorVisible && (
                    <Box
                      component="span"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: -3,
                        fontWeight: "bold",
                        color: darkMode ? "#f7f7f7" : "#1A1A1A",
                      }}
                    >
                      ▋
                    </Box>
                  )}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Status Bar */}
      {/* <Box
        sx={{
          height: "24px",
          bgcolor: "#1976D2",
          px: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.75rem",
          color: "#FFF",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="caption" sx={{ mx: 1 }}>
            branch: main
          </Typography>
          <Typography variant="caption" sx={{ mx: 1 }}>
            utf-8
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="caption">JavaScript</Typography>
          <Typography variant="caption" sx={{ mx: 1 }}>
            •
          </Typography>
          <Typography variant="caption">v2.5.1</Typography>
        </Box>
      </Box> */}

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes growBar {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .caret-none {
          caret-color: transparent;
        }
      `}</style>
    </Box>
  );
}
